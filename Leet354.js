/**
 * You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note:
Rotation is not allowed.

Example:

Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3 
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
 */



 /**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if(!envelopes || envelopes.length===0 || enevelopes[0].length===0){
      return;
  }
  let result = 0;
  
  let memo = new Array(envelopes[0].length).fill(new Array(envelopes.length).fill(0));
  //graph memo, optimzal subproblems that are overlapping
  //let's simply just keep tabs of the min, max h and w, and then map the taken dimensions, starting with w and making sure it is within height h specificity
  
  
  //do not mutate the envelopes array
  let minH=0;
  let maxH=0;
  let minW=0;
  let maxW=0;
  //traverse
  for(let i=0; i<envelopes[0].length; i++){
      //columns on the outer
      for(let j=0; j<envelopes.length; j++){
          //rows down inner
          let dimensions = envelopes[i][j];
          //(w, h)
          let w = dimensions[0];
          let h = dimensions[1];
          //since unsorted, we have an option to sort by increasing w, then compare heights only... merge sort would take Onlogn+On = Onlogn amotized.
          
          
          
          //we just have to compare to the previously stored on on the table
          //if 
      }
      
  }
  
  return result;
};

//you should have made this problem # 543 that would have been a lot funnier. 