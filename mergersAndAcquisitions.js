// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  
  //mergesort hybrid, K elements, K = A.length
  //merge part of mergesort, recursive divide and conquer
  
  //merging 1 sorted list of K elements, with a 2nd sorted list of L elements, differing lengths, 
  
  //O(K+L) 
  
  
  //time takes to merge more than 2 lists into 1,
  //binary tree graphs, balancing the lengths of the sorted lest will lead to logarithmic patterned runtime by the height of the tree(O average length)
  
  //if time required to merge more than 2 into 1 dependes on order in which merges are performs, 
  //to optimize mergesorts inherit nlogn, with sorting the lists, we must start out sorting the shorter lists together before combining with the larger(so we take advantage of the fact that O logN asymptotic takes advantage of the longest list length  , and that this only happens towards the end(nature of merge sort, reverse divide and conquert))
  
  //conquer largest
}
