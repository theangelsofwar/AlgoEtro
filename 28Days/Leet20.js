/** 20. Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const mapping = {')' : '(', 
                   '}' : '{',
                  ']': '['};
  
  //map the closing to the openings
  
  for(let i = 0; i<s.length; i++) {
    if (s[i] in mapping) {
      const curr = stack.pop();
      //found correponding opening
      
      if (mapping[s[i]] !== curr) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  
  return !stack.length;
  
};


module.exports= Leet20;
