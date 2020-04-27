//directed graph, find if path exists between two nodes

function pathExists(graph, start, end) {
  if(!graph.contains(start) || !graph.contains(end)) {
    return false;
  }
  if(start===end) return true;

  const queue = [];
  const visited = new Set();


  queue.push(start);
  ///length = 0 = false
  while(queue.length) {
    const currentNode = queue.shift();

    if (currentNode === end) return true;
    visited.add(currentNode);

    const edges = graph.findEdges(currentNode)

    const keys = Object.keys(edges);

    for(let i = 0; i < keys.length; i++) {
      const edge = edges[keys[i]];
      if(!visited.has(edge)) {
        queue.push(edge);
        visited.add(edge)
      }
    }
  }
  return false;
}

module.exports = pathExists;