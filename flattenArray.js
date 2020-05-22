/**
 * @param arr [2,[3],[4,5], [[7]]]
 * @return result [2,3,4,5,7]
 */

 const flattenArray = (arr) => {

  if(!arr || arr.length === 0) return arr;

  let result = [];
  //iteratively 
  for(let i=0; i<arr.length;i++){
    let el = arr[i];
    if(Array.isArray(el)){
      flattened = flattendArray(el); //will recursively give back response
      result.push(...flattened); //spread operator
      
    }
    else{
      result.push(el);
    }
  }

  //do in place
  return arr; 
 }


//  const helpArray = (element) => {
//    //takes in type array and flatten level
//    let isDone = false;

//    let res = [];

//    for(let j=0; j<element.length; j++){

//    }


//    return res;



// }

 module.exports = flattenArray;