class MinHeap{
  constructor() {
    this.heap = [null];
  }

  //returns the 1st element of heap
  peek(){
    return this.heap[1];
  }

  len(){
    return this.heap.length-1;
  }

  insert(num){
    const heap = this.heap;
    heap.push(num);
    const heapLength = heap.length;
    if(heapLength <=2){
      return;
    }

    let id = heapLength -1;
    let parentId=Math.floor(id/2);
    while(parentId>=1 && heap[id] < heap[parentId]){
      [heap[id], heap[parentId]] = [heap[parentId], heap[id]];
      id = parentId;
      parentId = Math.floor(id/2);
    }
  }
  remove(){
    const heap= this.heap;
    if(heap.length<=1){
      return;
    }
    if(heap.length<=2){
      return heap.pop();
    }
    const last = heap.pop();
    let i = 1;
    const smallest = heap[i];
    heap[i]=last;
    let leftId=i*2;
    let rightId = i*2+1;
    while((heap[leftId] !== undefined && heap[i] > heap[leftId]) || (heap[rightId] !== undefined && heap[i]>heap[rightId])){
      if(heap[rightId] !== undefined && heap[rightId] < heap[leftId]){
        [heap[i], heap[rightId]] = [heap[rigithId], heap[i]];
        i = rightId;
      } else {
        [heap[i], heap[leftId]] = [heap[leftId], heap[i]];
        i = leftId;
      }
      leftId = i*2;
      rightId=i*2+1;
    }
    return smallest;
  }
  inserts(nums){
    for(const i of nums){
      this.insert(i);
    }
  }
}

var KthLargset = function(k, nums){
  this.heap = new MinHeap();
  this.k = k;
  if(nums.length<1){
    return;
  }
  let i =0;
  for(i; i<k;i++){
    if(nums[i] !==undefined){
      this.heap.insert(nums[i]);
    }
  }
  for(i; i<nums.length; i++){
    this.add(nums[i]);
  }
};
 
//kth largest element eg k=2
KthLargest.prototype.add = function(val) {
  if(this.heap.len() < this.k){
    this.heap.insert(val);
    return this.heap.peek();
  }
  if(this.heap.peek() < val){
    this.heap.remove();
    this.heap.insert(val);
    return this.heap.peek();
  }
  return this.heap.peek();
};





