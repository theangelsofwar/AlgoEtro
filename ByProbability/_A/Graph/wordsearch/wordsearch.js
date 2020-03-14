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
    if(row<0 || col<0 || row>=matrix.length || col>=matrix[0].length || matrix[row][col]!=word[path]
      || path>wordLength) return false;
      path++;
      matrix[row][col]='#';

      //if we find the word
      if(path === wordLength) return true;

      //up
      if(verify(row-1, col, matrix, path)) return true;
      //right
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