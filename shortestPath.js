const Node = function(value){
  this.value = value;
  this.next = null;
};
//predefined a singly linked list

// use a Queue for breadth first search
const Queue = function(){
  this.storage = [];
  this.index = 0;
}

Queue.prototype.enqueue = function(value){
  this.storage[this.index++] = value;
  return;
};

Queue.prototype.dequeue = function(){
  if(this.storage === undefined || this.index === 0){
    return;
  }
  this.storage.shift();
  //the prototype chain acquires this. context of the original functional class with Object as the root
}
//use a HashMap, Map, or {} hashmap to track parents and reconstruct path 

/**
 * 
 * @param {*} a to Node
 * @param {*} b from Node
 * @return Linked List Path of the Nodes
 */
const shortestPath = (a, b) => {
  if(!a || a === null || !b || b === null) {
    return;
  }
  else if(a === b) {
    return null; //the path is none
  }

  const toVisit = new Queue();
  toVisit.enqueue(a);  //the start of the optimized path
  const parents = {};
  parents[a] = null;
  
  while(!toVisit.storage.length === 0){
    const currentNode = toVisit.dequeue;

    if(currentNode.children===null){
      
    }
    if(currentNode = b){

    }


  }
};


