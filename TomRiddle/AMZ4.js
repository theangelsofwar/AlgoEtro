/**
 * Question
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = “abcba” and k = 2, the longest substring with k distinct characters is “bcb”.
 */

 //longest substring with k distinc chars

 //sliding window, non specific distinctions

 //at MOST k distinct, we want most repetitive string as this optimiation

//maximize the length/window of the distinc with repeats(eg better compression/lossy)
/**
 * 
 * @param {} str input string
 * @param {*} k the ceiling for number of distinc within an maximized window
 */
const longestSubstring = function(str, k) {
  let l=0;
  let r=str.length-1;

  let i = 0;
  let charMap = new Map(); //map frequencies/presence/memoize
  let result = '';//longest result substring with less than or equal to K distinct (if set), without distinction specifications

  while(i<r) {
    //sliding widnow frame;
    const el = string.charAt(i);

    if(charMap.has(el)){
      // el is in Map
      charMap.set(el, charMap.get(el) + 1); //increment
    } else {
      //newly set
      charMap.set(el, 1);
    }


    //instead of having another loop, simultaneously check number of unqieu(charMap.keys().length > k, to reverse pointers)
    while(charMap.size>k && l < r) {
      let left = str.charAt(l);
      let count = charMap.get(left);
      
      if(count === 1) charMap.delete(left); //prioritize lowest frequency within the window
      else charMap.set(left, count-1); //disclude from window
      l++; 
    }
    //counter l is for indexing which window to include, counter i is for traversing indicator
    let substr = str.substring(l, i+1); //substring of window from l-i
    result = substr.length > result.length ? substr : result; //Math.max regex
    i++;
  }

  return result;
}

module.exports = longestSubstring;