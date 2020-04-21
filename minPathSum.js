/** Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum. */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let result = -1;
  //so we know that no consensus reached
  
  if(!grid || grid===null || grid.length<1 || grid[0].length<1){
      return result;
  }
  
  result=0;
  let y = 0; //row
      let x= 0; 

  // let position = [y, x]; row col
  while(y<grid.length && x<grid[0].length) {
      result+=grid[y][x]; //add on current element in the begining of each iter
      if(y===grid.length-1 && x===grid[0].length-1){
          return result; // reached minimum consensus
      }
      else if(y>=grid.length-1){
          //only one way to go is down
          x++;
          continue;
      }
      else if(x>=grid[0].length-1) {
          //only way is right
          y++
          continue;
      }
      else if(grid[y][x+1] < grid[y+1][x]) {
          x++;
          continue;
      }
      else {
          y++;
          continue;
      }
  }
  
  return result;
  
};