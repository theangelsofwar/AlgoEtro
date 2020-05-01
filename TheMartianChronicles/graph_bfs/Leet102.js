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
 * @return {number[][]}
 * 76% time percentile, 52 ms, 35 mb
 */
var levelOrder = function(root) {
  if(!root){
    return [];
  }
  var result = [];
  var queue = [];
  
  queue.push(root);
  // let levels = 0;
  
  while(queue.length) {
    
    let level = queue.length;
    
    let temp = [];
    for(let i = 0; i < level; i++) {
      let currentNode = queue.shift();
      temp.push(currentNode.val);
       //unlink and then add the neighbors from the queue
      if(currentNode.left !==null) {
        queue.push(currentNode.left); 
      }
      if(currentNode.right !== null) {
        queue.push(currentNode.right);
      } 
      
      //next level...avicii
    }
    
    result.push(temp);//add current array on the current level for breadth first searching
  }
  
  return result;
  
};