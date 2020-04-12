/**
 * You have K sorted Lists, each of varying lenghts of L
 * You want to optimize the runtime by merging the Lists in the optimal order
 * It takes K+L ms for each merge
 * 
 * 
 * Example: List P: 100 elements
 *          List Q: 250 elements
 *          List R: 1000 elements
 * 
 * Option 1: Merge P and Q=(350ms), then with R=(1350ms) total = 1700ms
 * 
 * Option 2: Merge P and R=(1100ms), then with Q=(1350ms) total = 2450ms
 * 
 * Option 3: Merge R and Q=(1250ms), then RQ with P(1350ms) total=2600ms
 * 
 * Write a function, given Array A of length N, each element at A represents 
 * the length of a list
 *  find shortest path in ms  to merge all N lists into 1
 * 
 * EX 2: A[0].length=100
 *       A[1].length=250
 *       A[2].length=1000 
 *       returns 1700 (ms)
 * 0<=N<=10000
 * @param array A 
 */

function solution(A) {
  //mergesort hybrid, multiple mergesort
  //merging 1 sorted list of K elements, with a 2nd sorted list of L elements, differing lengths, 
  //O(K+L) 
  
  //time takes to merge more than 2 lists into 1,
  //binary tree graphs, balancing the lengths of the sorted lest will lead to logarithmic patterned runtime by the height of the tree(O average length)
  //if time required to merge more than 2 into 1 dependes on order in which merges are performs, 
  //to optimize mergesorts inherit nlogn, with sorting the lists, we must start out sorting the shorter lists together before combining with the larger(so we take advantage of the fact that O logN asymptotic takes advantage of the longest list length  , and that this only happens towards the end(nature of merge sort, reverse divide and conquert))

  if(!A || A.length<2) {
    return 0;
  }
  //get a balnaced tree height runtime, but having balanced lengths

  //we will mergesort(or quicksort), the list of lists in A by itself based on length, 
  Array.sort(A);
  //use reduce 
  return A.reduce((acc,value) => {
    return acc+value; //the optmial order for a balanced logarithmic tree
  }, initialValue=0);
  //from there we simple mergesort from the beginning until the end(base case length of A is 1)
  //conquer largest
}


module.exports = mergeOptimization;