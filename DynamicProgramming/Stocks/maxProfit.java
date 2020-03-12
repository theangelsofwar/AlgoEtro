class Solution {
  public int maxProfit(int[] prices) {        
      
      int n = prices.length;
      int min = Integer.MAX_VALUE;
      int maxDiff = 0;
      
      for(int i=0;i<n;i++){    
          int earn = prices[i]-min;
          maxDiff=Math.max(maxDiff, earn);
          min=Math.min(min,prices[i]);
      }

      return maxDiff;
  }
}