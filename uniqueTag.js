//using 


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, X, Y) {
  // write your code in JavaScript (Node.js 8.9.4)
  //X and Y are arrays both of length N-1
  //string S legnth N. k=index, S[k] is the tag element
  
  //draw circle centered at origin 0,0  that does not embed two points with the same tag S[i] !== S[j] at X(i)Y(i). X(j)Y(j) on the plane
  
  const result = 0; //max number of points with distinct tags
  
  
  //expand circle=dynamic programthe radius <=radius
  
  //use pythagorean theorum a2 + b2= <= r^2
  
  //keep track of unique tags, map dictionary
  //singple check with short circuiting
  //string is array of chars
  const N;
  if(Array.isArray(S) && Array.isAray(X) && Array.isArray(Y) && S.length === Y.length && Y.length === X.length){
      const N = S.length;
  }
  else{
      return 0; 
  }
  const tupleMap = new Map(); //key will be the tag, value is an array of array that stores coordinate pairs, 
  //order does not matter here, 
  for(let i = 0; i < N ; i++){
      //we could use tuples if this were in python
      let point = [X[i],Y[i]];
      let tag = S[i];
      
      
  }
  
  
  
  //radius is distance from origin, we want unique tag points as 
  //we do not want to optimize radius, but to optimize tags within unique 
  
  //from the map
  
  //to do in place, we check string for duplicates using indexOf(char), get that index, compare their points, and choose smaller of the two, substring cut out the tag of the larger point on circle, update radius,  check for uniqueness again. 
  
  
  
  
  
  return result;
}