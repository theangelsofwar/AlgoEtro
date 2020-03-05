//leet 435
const eraseOverlapIntervals = (intervals) => {
  //given an array of intervals
  if(intervals.length <=1) {
    return 0;
  }
  intervals = intervals.sort(function(x, y){
    return x.start - y.start;
  });
  //rearrane the intervals from starting point order

  var count = 0;
  var cursor=1; //current position on the interval

  while(cursor < intervals.length){
    //while we are within the intervals array at position cursor is the current inner array interval
    var removeIndex;

    //check if the previous start index is the same as the current start index, or if the current sstart index is less thant the last end index, then it is invalid
    if(intervals[cursor].start === intervals[cursor-1].start || intervals[cursor].start< intervals[cursor-1].end){
      //as a result we must remove this said index from the intervals array at position cursor
      removeIndex=intervals[cursor].end > intervals[cursor-1].end ? cursor : (cursor-1);
      //if the current end index of the interval is wider than the previous interval end, we remove the current interval at cursor, 
      //if the current end index is less than or equal to the previous end and has a narrower spread, then we remove the previous wider interval to minimize spread

      intervals.splice(removeIndex,1);
      //remove the index interval that overlaps
      count++;
      continue; //break out of current iteration and do not enter next if statement
    }

    //if the current interval's end is smaller than the previous end, it is an overlapping interval and will not be continuous
    //however, if it already passed the condition above the interval is already removed and we don't need to double check that it is in fact overlapping
    if(intervals[cursor].end <= intervals[cursor-1].end){
      //the remove index of the interval is current if the current start is wider than the previous, else it is the previous
      removeIndex = intervals[cursor].start > intervals[cursor-1].start ? (cursor-1) : cursor;
      count++;

      continue;
    }
    cursor++;
  }
  return count;
  
};


