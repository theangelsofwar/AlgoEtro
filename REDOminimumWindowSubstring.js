//Given a String S and a String T, find minimum window in S which will contain the characters of T of the order in T,  in linear time

//return : the window
// For example, S = "ADOBECODEBANC",  T = "ABC",
// Minimum window is "BANC".

//duplicate chars?
const minimumWindowSubstring = (S, T) => {
  let tracker = {};
  
  for(let i =0; i< T.length; i++){
    let letter=T.charAt(i);
    if(tracker[letter] === undefined)
    {
      tracker[letter]=0;
    }
    else
    { 
      tracker[letter]++; //number of occurences
    }
  }
  let counter=0;
  let leftPoint=0;
  let rightPoint=S.length-1;
  //T is always less than S, use string manipulation 
  //if we splice out 
  for(let i = 0; i< S.length; i++){
    
  }



}

console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC'))