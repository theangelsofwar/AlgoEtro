function Queue(){
  this.storage = [];
  this.index = 0;
}

Queue.prototype.enqueue = function(value){
  this.storage[this.index++] = value;
  return;
};


Queue.prototype.dequeue = function(){
  if(this.storage === undefined || this.index===0){
    return;
  }
  return this.storage.shift();
};


module.exports = Queue;