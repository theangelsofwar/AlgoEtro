/**
 * There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

Note:

N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 1 <= w <= 100.
 */

var NetworkDelayTime = function(times, N, K ) {
  //BFS, 
  //O(1) time, O(1) space
  var visited = {}; //number: true

  var result;

  var edges = {};

  for(let i = 0; i < times.length; i++){
    let currentNode = times[i];
    edges.node= 
  }




  return result;

}


module.exports = NetworkDelayTime;
