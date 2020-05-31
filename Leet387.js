/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //unique char
    if(!s) return s;
    let result = s.length-1;
    //add a results array and set it to the first one
    var results = new Map(); //mape unique elements, remove non unique and pop the 
    // let resultIndexes = []; //
    var maps = new Map();
    for(let i=0; i<s.length; i++){
        let el = s[i];
        //dynamically continue to upadte 
        if(!maps[el]){
            //not exist in map, unique currently
            maps[el] = 1; //histogram
            results[el] = i; 
            // if(result<0){
            //     result = i;
            // }
            // else {
            //     continue; //only first unique
            // }
        }
        else {
            
            maps[el] = maps[el]+1;
            //if this is a repeat of the result
            if(results[result] === el){
                //conflict in element, must change result to the index prior, or -1
                results.delete(el); //delete from map
            }
        }
        
        let resultvalues = results.values();
        for(let j=0; j<resultvalues.length; j++){
            let rom = resultvalues[j];
            result = Math.min(rom, result);
        }
    }
    
    return result;
};