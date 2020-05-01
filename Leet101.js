/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  //use 2 queues
  if(!root) return true;
  let leftQ = []; 
  
  let rightQ = [];
  

  let leftResult = [];
  let rightResult = [];
  
  
  //mirror image on the root
  leftQ.push(root);
  
  rightQ.push(root); //symmetry
  while(leftQ.length && rightQ.length) {
    let currentLeft = leftQ.pop();
    leftResult.push(currentLeft.val);
    let leftLen = leftQ.length;
    
    let currentRight = rightQ.pop();
    rightResult.push(currentRight.val);
    let rightLen = rightQ.length;
    
    if(currentLeft.val!==currentRight.val){
      return false;
    }
    
    if(leftLen!==rightLen){
      return false; //impossible to be symmetric
    }
    
    let leftTemp = [];
    let rightTemp = [];
    //for the current level 
    for(let i = 0; i < leftLen; i++) {
      //level
      let left= leftQ.pop();
      let right = rightQ.pop();
      if(left.val !== right.val){
        return false;
      }
      leftTemp.push(left.val);
      rightTemp.push(right.val);
    }
    
    leftResult.push(leftTemp);
    rightResult.push(rightTemp);
    
     if(currentLeft.left!==null) {
       if(currentRight.left!==null) {
         leftQ.push(currentLeft.left);
         rightQ.push(currentRight.left);
       }
       else {
         return false;
       }
     } else {
      if(currentRight.left!==null) {
        return false; //left is null but right isn't non symmetrical
      }
    }
    
    if(currentLeft.right!==null) {
      if(currentRight.right!==null) {
        leftQ.push(currentLeft.right);
        rightQ.push(currentRight.right);
      }
      else {
        return false;
      }
    } else {
      if(currentRight.right!==null) {
        return false;
      }
    }
    
  }
  
  return true;
};