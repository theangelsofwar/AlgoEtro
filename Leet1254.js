/**
 * Number of Closed Islands
 * Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 

Example 1:



Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
 

Constraints:

1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  //   let numIslands = 0; 
    
  //   const findIsland = (i, j) => {
  //     if(grid[i][j]){
  //       return true;
  //     }
      
  //     if(grid[i][j] === 0){
  //       grid[i][j] = 2; //visitation statue
  //       if(i<1 || i>= grid.length-1 || j<1 || j>=grid[0].length - 1) {
  //         return false;
  //       }
        
        
        
  //     }
  //    }
    
    
    
    
    
  //   return numIslands;
    
    
    
    
    
    
    
    
    
  
    
    
    
    
    //Solution 1: Using Standard Numislands //DFS use a stack
    let result = 0;
    
    let m = grid.length;
    let n = grid[0].length;
    
    const processIsland = (i, j, isIsland) => {
      if(j<0 || j>=n || i<0 || i>=m || grid[i][j]!== 1 || grid[i][j]!==0){
        return isIsland; //if the enclosing island is not by water = 1
      }
      else {
        grid[i][j]='';
        // let isIsland = true;
        //do mutate this...
        if(i>=0 && grid[i-1][j]) { 
          //if surrounded by 1 
          //must be true and true
          isIsland = isIsland && processIsland(i-1, j); //process island until it is complete, we cannot shortcircuit without a series of checks
        }
        if(i<=m-1 && grid[i+1][j]) {
          //m-2 index to be less than so it is an enclosed idland
          //the bounds of the grid surrounding canbe 1s
          isIsland = isIsland && processprocessIsland(i+1,j);
        }
        if(j>=0 && grid[i][j-1]) {
          isIsland = isIsland && processIsland(i, j-1);
        }
        if(j<n && grid[i][j+1]) {
          isIsland = isIsland && processIsland(i, j+1);
        }
        
        return isIsland;
      }
    }
    
    for(let i=1;i<grid.length-1;i++) {
      //we cannot have islands that are not enclosed
      for(let j=1;j<grid[0].length-1;j++) {
        //if we hit an element that has a zero(potential for island, we can increment the 1, then mutate the grid to not have any overlap, though mutating or not should be fne since they should not be continugous....)
        if(grid[i][j]===0) {
          result+=processIsland(i,j, true); //true or false will add a 1 or a 0
        }
        else {
          continue;
        }
      }
    }
    return result;
  };