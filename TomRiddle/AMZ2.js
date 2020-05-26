//decoding from AMZ1 encoding

//input: the compressed string

/**
 * 
 * @param {*} str in compressed form
 * @return (*) result string that is decoded
 */
const decoding = function(str) {
  if(str.length===0) return '';

  //in case count is >10
  let currentCount = 0;

  let result = '';

  for(let i=0; i<str.length; i++){
    const el = str.charAt(i);
    currentCount *=10;
    currentCount +=num; //tens place, ones, 
    //check if it is a count number
    if(isNumber(el)){
      let num = Number(char); //cast to Number typeof
    } else {
      for(let j=0; j<currentCount; j++){
        result+=el; //do this for the count
      }
      currentCount = 0; 
    }
  }
  //decoded result
  return result;
}

module.exports = decoding;