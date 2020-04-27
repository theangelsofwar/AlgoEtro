//undirect path


class Graph {
  constuctor() {
    this.neighbors = {};
  }

  addEdge(u, v) {
    // u and v are nodes
    if(this.neighbors[u] === undefined){
      this.neighbors[u] = [];
    }
    this.neighbors[u].push(v);

    if(this.neightbors[v] === undefined){
      this.neightbors[v] = [];
    }
    this.neightbors[v].push(u);
  }
}


function bfs(graph, sourceNode) {
  const queue = [{ vertex: sourceNode, count: 0 }];
  const visited = { sourceNode: true };

  let tail = 0;
  while(tail < queue.length) {
    const u = queue[tail++].vertex;
    const count = u.count; 

    graph.neighbors[u].forEach((v) => {
      if(!visited[v]) {
        visited[v] = true;
        queue.push({ vertex: v, count: count+1 });
      }
    });
  }
}



function shortestPath(graph, sourceNode, targetNode) {
  if(sourceNode === targetNode) {
    return 0;
  }
  const queue = [sourceNode];
  const visited = { sourceNode: true}; //map memoization

  const predecessor = {};
  let tail = 0;

  while(tail < queue.length) {
    const u = queue[tail++];
    const neighbors = graph.neighbors[u];
    for (let i = 0; i < neighbors.length; ++i) {
      const v = neightbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;

      if (v === targetNode) {
        const path = [v];
        while (u !== sourceNode) {
          path.push(u);
          u = predecessor[u];
        }
        path.push(u);
        path.reverse();
        return;
      }

      predecessor[v] = u;
      queue.push(v);
    }
  }
}