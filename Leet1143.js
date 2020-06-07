/**
 * Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

If there is no common subsequence, return 0.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let result = 0;
  if(!text1 || !text2 || text1.length === 0 || text2.length === 0){
      return result;
  }
  
  let substr="";
  //memo
  let memo = new Array(text1.length).fill(new Array(text2.length).fill(0));
  //must be 2d array
  
  for(let i=0; i<text1.length; i++){
      for(let j=0; j<text2.length; j++){
          //perhaps instead of using double for loop we can use a single get the array element, use ...memo[i].map(el => {})... but still On2
          if(text1.charAt(i) === text2.charAt(j)){
              if(i===0 || j===0){
                  memo[i][j] = 1;
              }
              else{
                  memo[i][j] = memo[i-1][j-1]+1;
              }
              if(memo[i][j]>result) {
                  result = memo[i][j]; //or Math.max
                  substr = text1.slice(i-result+1, i+1);
              }
          }
      }
  }
  
  return result;
};