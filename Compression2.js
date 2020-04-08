/** Given a string S, and K < S, 
 * Cut off K consecutive strings off S to optimzie the compression length 
 * 
 * 
 * Example: S = ABBBCCDDCCC K=3
 * cuts off DDC, compressed S is A3B4C.
 * returns optimal length of 5
 * String S only contains uppercase letters
 * 
 * S=AAAAAAAAAABXXAAAAAAAAAAAA K=4, we must remove BXXA or ABXX
 * end up with 21A, return the length of the compressed string, A
 * Presume: 
 * 0<K<S.length<10000
 * 
 * 
 * **/

 function optimizeCompression(S, K){

 }


 module.exports = optimizeCompression;