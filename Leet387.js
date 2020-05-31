/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  //unique char
  if(!s) return s;
  let result = -1;
  
  let maps = new Map();
  for(let i=0; i<s.length; i++){
      let el = s[i];
      //dynamically continue to upadte 
      if(!maps[el]){
          //not exist in map, unique currently
          maps[el] = 1;
          
          if(result<0){
              result =i;
          }
          else{
              continue; //only first unique
          }
          
      }
      else {
          maps[el] = maps[el]+1;
      }
  }
  
  return result;
};