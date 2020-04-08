
//using stacks and queues in algorithsm 
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//shorted possible length



function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  //K consecutive remove to optimize compression
  const N = S.length;
  const result = ""; //reassign to the min between recursive case and th
  
  //sliding window and dynamic programming method
  //recursively
  
  const arrayMap = [];
  //maintain order and the frequency, array of mappings
  
  //double hashMap
  for(let i = 0; i<N ; i++){
      let el = S.charAt(i);
      //map value
      let map = new Map();
      let freq=1;
      let j = i;
      while( S.charAt(j) === el && j < N ){
          //explore rest frequency
          freq++;
          j++;
      }
      i=j; //do not cut or mutate original string
      map[el] = freq;
      arrayMap.push(map);
      for(let g = 0; g < k; g++ ){
          //iterate through consectives non 
          
      }
      
  }
  
  //dynamic program
  
  
  //we are going to store the Uppercase value as the key on the map  th
  
  return result.length;
  
  //return shortest possible
  
}