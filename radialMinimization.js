/**
 * Prompt: Given String S with corresponding Arrays X[] and Y[],
 * S is a string with only capital alphabetical letters that may not contain unique chars
 * 
 * Each char on index i on String S is uniquely mapped to a corresponding point X[i] Y[i]
 * S[i] is a tag element
 * find the minimum number of points that can be contained around a circle centering at the origin
 * 
 * Parameter Assumptions:
 * X[i], Y[i] element of all real numbers 
 * 
 * EX 1: S=ABB X=[1,-2,-2] Y=[1,-2,2] will return 1, there is only one point within a circule
 * Reason: chars B are non unique and equidistant from the origin 
 * EX 2: S=CCD X=[1,-1,2] Y=[1,-1,-2] returns 0 
 * 
 * EX 3: 1=ABDCA X=[2,-1,-4,-3,3]
 * 
 * 
 * Presume: S is All Caps Letter(26)
 * Labels Cannot overlap(otherwise duplicates)
 * S.legth===X.length===Y.length===N<100K
 * Each Coordinate at (X[i],Y[i]) is within -1M and 1M
 *
 */
 function radialMinimization(S, X, Y){
  //we want to minimize the circle arount the origin to maximize the ecapsulated data points with unique chars only
  //we want an maximized radius within the boundaries for unique tags so that
  //for every kth element of S, S[i]!=S[x] for points( X[i],Y[i]) (X[j],Y[k])

  //return the max number of points within the "optimal radius"
  let arr=[S,X,Y];
  let equalLengths=arr.reduce((el, index, arr) => {
    return arr[0].length===el.length;
  }, true);
  if(!S || !X || !Y || !equalLengths){
    return -1; //incorrect inputs
  }
  else if (S.length==0){
    return 0; //no tags included
  }
  else if (S.length===1){
    return 1; //one tag is unique, check for uppercase
  }

  const result = 0; //max number of points with distinct tags
  const maxRadius=0;
  const memo = new Map(); //new Map() key will be Char, Value will be the distance(radius)
  //we will not use a recursive closure, since arrays are immmutable
  //shifting them causes unecessary storage 

  for(let i=0; i<S.length; i++) {
    let el=S.charAt(i);
    let localRadius=Math.sqrt(X[i]*X[i]-Y[i]*Y[i]); //rounding in javascript
            //radius r=sqrt(X[i]**2 - Y[i]**2)

    if(!memo[el]){
      //is unique, not mapped to memo
      //store current radius
      if(localRadius<maxRadius){
        continue; //we have already checked globalRadius only contains unique Labels
      }
      //if point within is unique within the current radius, we can add it to the dictionary
      else{
        maxRadius=localRadius;
      //replace global radius r with the farthest point
      }
      //the current largest possible radius is the point that is unique farthest from origin
      memo[el]={localRadius: localRadius,
                el: el}; //double key
    }
    else {
      //in the case that the element is not unique, we do not map it, but we must also ensure that we do not include it
      if(localRadius<maxRadius) {
        //if this non unique item is within the item, we must then find the existing label, 
        //get the min between their radius distances to store, 
        let duplicateRadius=memo.el.localRadius;
        //if the duplicateRadius is larger than the currentRadius, we can swap them,
        if(duplicateRadius>localRadius) {
          memo[el]={ localRadius: localRadius,
                    el: el};
          //we do not need to update the maxRadius unless it was duplicateRadius
          if(maxRadius==duplicateRadius) {
            updateMaxRadius(memo); //call helper
          }
          continue;
        }
        else {
          //if the duplicateRadius is still smaller than the current radius
          //then we must update maxRadius by removing the elements that are at maxRadius, 
          while(maxRadius>localRadius) {
            const radiusValuesIterator=memo.values();
            //and any elements that are farther than localRadius(in order to exclude it)
            maxRadius=Math.max(radiusValuesIterator);
            let el = radiusValuesIterator; //change the doubly linked
            //then once we are within the scope fo the localRadius we must find the new maxRadius
          }
          
        }

      }
      else {
        //if the localRadius that isn't unique is outside of exclusive Domain, we can move forward
        continue;
      }
    }

  


  //checking if a point within is unique at an arbitrary location of the grid(assuming not ordered by distance by origin)
  //we store existing accepted unique entries in a map and check if their frequecy is there, 

  //if it is not there, we must update the radius, degrade it down to not include the point
  //degrade it to the next largest radius on the unique map
  }


  return result;
 }



 //recursive approach, we return the substring, have a helper function or a closure with contains the current radius and the global radius within the scope


 module.exports = maxRadius;