//encoder
/**
 * Question
Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character.
For example, the string “AAAABBBCCDAA” would be encoded as “4A3B2C1D2A”.
Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
 */

 const encoding = function(str){
   let current = str.charAt(0);
   let count = 1;

   //encoding result
   let result = '';


   for(let i=1; i<str.length; i++){
     let el = string.charAt(i);
     if(el === current) count++; //continue compression
     else {
       encoding += count + el; //from the previous store

       //reset 
       count = 1;
       current = el; //new store from current is the next aggregate previous
     }
   }

   result += count + current;


   return result; 
  
 }


 module.exports = encoding;