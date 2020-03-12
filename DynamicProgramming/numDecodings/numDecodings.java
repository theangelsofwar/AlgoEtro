class Solution{
  private boolean isSingleDigit(char c1, char c2){
    if(c1=='0') return true;
    return false;
  }

  private boolean equalInValidTens(char c1, char c2){
    if((c1=='0' || c1>='3')&&c2=='0') return true;
    return false;
  }

  private boolean equal10OR20(char c1, char c2){
    if((c1=='1' || c1=='2')&&c2=='0') return true;
    return false;
  }

  private boolean within26(char c1, char c2){
    if(c1>='3') return false;
    if(c1=='2'&&c2>'6') return false;
    return true;
  }
  public int numDecodings(String s){
    char[] ar=s.toCharArray();
    int n = ar.length;
    if(n==0) return 0;

    if(ar[0]=='0') return 0;
    int first = 1;
    if(n==1) return first;

    if(equalInValidTens(ar[0],ar[1])) return 0;
    int second = 1;
    if(within26(ar[0],ar[1])) second=2;
    if(isSingleDigit(ar[0],ar[1])) second = 1;
    if(equal10OR20(ar[0],ar[1])) second = 1;
    if(n==2) return second;

    for(int i=1;i+1<n;i++){
      int curTotal=0;
      if(equalInValidTens(ar[i],ar[i+1])){
        return 0;
      }else if(isSingleDigit(ar[i],ar[i+1])){
        curTotal=second;
      }else if(equal10OR20(ar[i],ar[i+1])){
        curTotal=first+second;
      }else if(within26(ar[i],ar[i+1])){
        curTotal=first+second;
      }else{
        curTotal=second;
      }
      first=second;
      second=curTotal;
    }

    return second;
  }
}