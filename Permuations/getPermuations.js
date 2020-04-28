// array of strings input

//get all permuations of each strign

function getPermuations(...arr) {
  const output = new Set();

  function generatePermuations(str, acc) {
    if(!str.length) return output.add(acc);

    for(let i = 0; i< str.length; i++ ){
      const char = str[i];

      acc += char;
      //reduce
      generatePermuations(str.slice(0, i) + str.slice(i+1), acc);
      acc = acc.slice(0, acc.length-1);
    }
  }

  for(const str of arr){
    generatePermuations(str); //only for each loop 
  }

  return [...output];
}

//second version
function getPerms(...arr) {
  const output = new Set();
  //unique perms, 
  //instead of double counting, we can take advantage of the symmetrical recurisve calls regardless of palindrome
  function helper(str, acc) {
    if(str === ''){
      output.add(acc);
      return;
    }

    for(let i = 0; i< str.length; i++){
      const char = str[i];
      str = str.slice(0, i).concat(str.slice(i+1));
      helper(str, acc+char);
      str = str.slice(0, i) + char + str.slice(i);
    }
  }

  for( let word of arr) {
    helper(word, '');
  }
  //take advantage use of closure to prevent generating symmetrical permutations from different recursive calls
  return [...output]; 

}

console.log(getPerms('sac','acs', 'hi', 'redundant'));

// module.exports = getPermuations;