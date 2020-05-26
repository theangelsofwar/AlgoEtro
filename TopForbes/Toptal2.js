// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //location ID is A[K]
  
  
  if(!A) {
      return;
  }
  
  let locationSet = new Set(A);
  
  
  let windowresult = A; //window array
  
  
  let start = 0;
  let end =A.length-1; 
  
  let leftIndex = 0; //like binary search overlap
  let rightIndex = A.length-1;
  //priority Queue, shortest path dijkstras, also optimize reduction in duplicates, and go to most locations(max and min opimie)
  
  


  while(leftIndex<rightIndex){
       // for(let i=start; i<=end; i++){
      let potentialLeft = A.slice(leftIndex, rightIndex-1);
      let potentialSetLeft = new Set(potentialLeft);
      if(potentialSetLeft == locationSet){
          windowresult = potentialLeft;
      
          rightIndex--;
          end = rightIndex;
          
      }
      else{
          rightIndex--;
      }
      
      let potentialRight = A.slice(leftIndex+1, rightIndex);
      let potentialSetRight = new Set(potentialRight);
      if(potentialSetRight == locationSet){
          windowresult = A.slice(leftIndex+1, rightIndex);
          //account right index already possible alter
           //splitting
           leftIndex++
           start = leftIndex;
      }
      else{
          leftIndex++; //still move to proceed
      }
     
      //dynamic iterator
      //check the leave it on opposing ends if to keep direction
      
      
      
      //compare the set of the window with or without, take it or leave it, math.max length keep window
      //only want the window set
      //minimuize
      
  //}
  }
 
  
  return windowresult.length;
  