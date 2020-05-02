/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  //if it is a zero itself, the closest zero is itself, so just fill in 0 

  //only care if it is a 1,
  if(!matrix) {
    return;
  }
  //0 is mapped to false, 1 is mapped to true, we are looking for the inverse
  
  // var result = []; do this in place
  // let dist = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let queue = [];

  for(let i = 0; i < rows/2; i++){
    //i is the y(rows) traverasal -y
    // result.push([]);
    //we can iterate though 1/4 of the entire array and do symmetrical comparisons to fill in the result matrix
    for(let j = 0; j < cols/2; j++) {
      let q2 = []; //we are only working through the 2nd quadrant... //first element is value, second is the coordinates
      q2.push(matrix[i][j]); 
      q2.push([i, j]);
      let q1 = []; //quadrant 1 symmetrical
      q1.push(matrix[i][cols-j-1]); 
      q1.push([i, cols-j-1]);
      let q3 = [];
      q3.push(matrix[rows-i-1][j]); 
      q3.push([rows-i-1, j]);
      let q4 = [];
      q4.push(matrix[rows-i-1][cols-j-1]); 
      q4.push([rows-i-1, cols-j-1]);
      //element value, position coordinates
      //is there a way to have all these elements simultaneously using map reduce to check and get the recursive closest distance
      //store each quadrant on a HashMap, with the keys being their quadrants, and have them overlap in the iterator through expanding 
      // let quadrantsMap = { "q1": [...q1], "q2": [...q2], "q3": [...q3], "q4": [...q4] }; //key value is string quarter of the quadrant(eg, q1 q2, q4, q3) and map the value 0 which is mapped to false, or the radial distance to put on their result position matrix for the closest 0
      //if it has not yet encountered a 1 upon symmetrical radial expansion...
      
      if(q1[0]!==0) {
        queue.push(q1);
      }
      if(q2[0]!==0) { 
        queue.push(q2);
      } 
      if(q3[0]!==0) {
        queue.push(q3);
      } 
      if(q4[0]!==0) {
        queue.push(q4);
      }
      // quadrantsMap["q1"] = q1;
      // quadrantsMap["q2"] = q2; //if el is 0, then it is mapped to false, matrix is unaltered
      // quadrantsMap["q3"] = q3;
      // quadrantsMap["q4"] = q4;
//       //now we have queues
//       let qkeys = Object.keys(quadrantsMap);
//       for(let i = 0; i < qkeys.length; i++) {
//         let p = quadrantsMap.keys[i];
//         if(p!==0){
//           queue.push(p);
//        }
//      }
     
      
      //now we store the mapping
      // result[i][j] = quadrantsMap.q2[0]; //if not in the queue, map original 0
      // result[i][cols-j-1] = quadrantsMap.q1[0];
      // result[rows-i-1][j] = quadrantsMap.q3[0];
      // result[rows-i-1][cols-i-1] = quadrantsMap.q4[0];  
      while(queue.length) {
      let current = queue.pop();
      let currentItem = current[0]; //actual value
      let currentPosition = current[1]; //array position
      let currentI = currentPosition[0];
      let currentJ = currentPosition[1];
      let currentExpanse = 1;
      while((currentI+currentExpanse<rows && matrix[currentI+currentExpanse][currentJ]!== 0) || (currentJ+currentExpanse<cols && matrix[currentI][currentJ+currentExpanse]!== 0) || (currentI-currentExpanse>=0 && matrix[currentI-currentExpanse][currentJ]!== 0) || (currentJ-currentExpanse>=0 && matrix[current][currentJ-currentExpanse]!==0 )) {
            currentExpanse++;
          }
      matrix[currentI][currentJ] = currentExpanse;  
  }
    }
    
  return matrix;
  //use symmetry radial level expanse on each 1 element to optimize BFS
  
};