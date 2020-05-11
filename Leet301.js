/**
 * Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
 */
//Leet #301 Hard
//Runtime 188ms, 18.93% faster,
// 44mb

 /**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  //since the result is going to be the same minimum length, eq max removals,
  
//   const matches = {
//     "[": "]",
//     "{": "}",
//     "(": ")"
//   }; //a dictionary
  
  let queue = new Set([s]); //BFS
  while(queue.size) {
    let next = new Set();
    for(let v of queue) {
      if(isValid(v)) {
        return [...queue].filter(isValid);
      }
      
      for(let i=0; i<v.length; i++) {
        next.add(v.slice(0, i) + v.slice(i+1));
      }
    }
    queue = next;
  }
  return [''];
  
  //for all the options we are moving = k out of the original string, therefore this is the reverse of something like "K consecutive" or "K pattern"
  
  
  //we can have a different version of a "fast" and "slow" counter to map corresponding parenthesis(or not), by instead having an "outer" and "inner" corresponding parenthesis
//   const result = [];
//   const stack = [];
  
//   for(let i=0;i<s.length;i++) {
//     let el = s.charAt(i);
//     //check if it is a valid possible match
//     if(matches.hasOwnProperty(el)){
//       stack.push(el);
//     } else if(el==="]" || el==="}" || el===")") {
//       let correspondent = stack.pop();
//       if(matches[correspondent] !== el) {
//         //no match, potential cutoff, not a potential result
//       }
//       else {
//         result.push(el); //valid for a possible result
//       }
//     }
    
//   }
  
  
  
//   return result;
};

function isValid(str) {
  let bal = 0;
  for(let ch of str) {
    if(ch==='(') {
      bal++;
    } else if (ch===')') {
      bal--;
    } 
    if(bal<0) {
      return false;
    }
  }
  return bal===0;
}