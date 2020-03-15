/**
 * @param {character[][]} matrix
 * @param {string} word
 * @return {boolean}
 */

 const exist = (matrix, word) => {
   let wordLength = word.length;
   word = word.split(""); //convert the word string into array, since stirngs are immutable
   
   //path is current location
   const verify = (row, col, matrix, path) => {
     //if we are out of the bounds of the grid, or if the current element does not have the current built up word at the path location
    if(row<0 || col<0 || row>=matrix.length || col>=matrix[0].length || matrix[row][col]!=word[path]
      || path>wordLength) return false; //not in the search, base case, game over
      //otherwise we increment the path location
      path++;
      matrix[row][col]='#'; //path is the buildup element char at index of word
      //fill out if already visited for this context
      //if we find the word
      //that chars match and the path is complete
      if(path === wordLength) return true;

      //up
      if(verify(row-1, col, matrix, path)) return true;
      //right, recursively search the edges
      if(verify(row, col+1, matrix, path)) return true;
      //down
      if(verify(row+1, col, matrix, path)) return true;
      //left
      if(verify(row,col-1,matrix,path)) return true;

      //backtrack
      matrix[row][col]=word[--path];
      return false;
   }

   for(let i=0; i<matrix.length; i++){
     for(let j =0; j<matrix[i].length; j++){
       if(verify(i,j,matrix,0)) return true;
     }
   }
   return false;
 };