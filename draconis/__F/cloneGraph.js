// unidirected graph
//Node
//each node in graph contains label and list of edges(neighbors)
const Node = function(){
  constructor: function(value){
    this.value = value;
    this.edges = [];
  },
  addNeighbor: function(node){
    this.edges.push(node);
  }
}


module.exports = graph;