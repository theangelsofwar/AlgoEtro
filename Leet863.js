/**
 * 863. All Nodes Distance K in Binary Tree
 * 
 * We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]

Explanation: 
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.



Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.
 

Note:

The given tree is non-empty.
Each node in the tree has unique values 0 <= node.val <= 500.
The target node is a node in the tree.
0 <= K <= 1000.
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 * this got 72ms, 20%
 */
var distanceK = function(root, target, K) {
  if(!root){
    return null;
  }
 
  var result=[];
  let distance, minRoute;
  
  const minPath = (node, target, total, route) => {
    route = JSON.parse(JSON.stringify(route));
    route[node.val] = true; 
    
    if(node.val === target.val){
      distance = total;
      minRoute = route;
      return;
    }
    if (node.left) minPath(node.left, target, total+1, route); //if left child exists, dfs
    if (node.right) minPath(node.right, target, total+1, route);
  }
  
  minPath(root, target, 0, {});
  
  const dfs = (node, dist) => {
    if (!node) return;
    
    if (dist === K) result.push(node.val);
    
    if (node.left) {
      (minRoute[node.left.val]) ? dfs(node.left, dist - 1) : dfs(node.left, dist + 1);
    }
    
    if (node.right) {
      (minRoute[node.right.val]) ? dfs(node.right, dist - 1) : dfs(node.right, dist + 1);
    }
  }
  
  dfs(root, distance);
  return result;
  
  //the root is the relative position of the tree..
  
  //return a base case helper of positive K, negativeK
  
  //we want all nodes at target +- K distance in nodes, up and down
  
  //we do not care about the entire height of the tree, only up to target-K and K after target
  
};