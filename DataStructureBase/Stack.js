//use of es5

function Stack(){
  this.storage = {};
  this.index = 0;
}


Stack.prototype.push = function(value) {
  this.storage[this.index++]=value;
}

Stack.prototype.pop= function() {
  if(this.index===0) {
    return;
  }
  return this.storage[--this.index]; 
}