/**
 * Prompt: Given String S with corresponding Arrays X[] and Y[],
 * S is a string with only capital alphabetical letters that may not contain unique chars
 * 
 * Each char on index i on String S is uniquely mapped to a corresponding point X[i] Y[i]
 * 
 * find the minimum number of points that can be contained around a circle centering at the origin
 * 
 * Parameter Assumptions:
 * X[i], Y[i] element of all real numbers 
 * 
 * 
 * 
 * EX 1: S=ABB X=[1,-2,-2] Y=[1,-2,2] will return 1, there is only one point within a circule
 * Reason: chars B are non unique and equidistant from the origin 
 * EX 2: S=CCD X=[1,-1,2] Y=[1,-1,-2] returns 0 
 * 
 * EX 3: 1=ABDCA X=[2,-1,-4,-3,3]
 * 
 * 
 * Presume: S is All Caps Letter(26)
 * S.legth===X.length===Y.length===N<100K
 * Each Coordinate at (X[i],Y[i]) is within -1M and 1M
 * 
 * 
 *
 */



 function radialMinimization(S, X, Y){
  //we want to minimize the circle arount the origin to maximize the ecapsulated data points with unique chars only
  //
 }