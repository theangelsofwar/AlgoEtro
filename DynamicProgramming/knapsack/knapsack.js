//From BU Summer Notes

/*
  You have a knapsack with a weight limit.
  You are also presented with a list of singular items, each with a weight and a value.
  Each item can be counted only once.
  What is the optimal total value of a set of items that can fit in your knapsack?

  You are presented with an array of singlular objects, each object has a weight and value.
  Imagine that each object represents a unique item, to be counted once.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [
    {weight: 1, value : 3}, 
    {weight: 2, value : 4}, 
    {weight: 3, value : 5},
  ];
  knapsack(items, 3); // returns 7 (from items[0] and items[1])
  knapsack(items, 5); // returns 9 (from items[1] and items[2])
*/
//recursively explore all options
const knapsack = ( itemsLeft, weightLimit) => {
  if(itemsLeft.length === 0 || weightLimit === 0) return 0;

  if(itemsLeft[0].weight > weightAvailable){
    return knapsack(itemsLeft.slice(1), weightLimit)
  }
  //omit first item if it does not fit
  else{
    const left = itemsLeft.slice(1);
    const takeIt = itemsLeft[0].value+ knapsack(left, weightLimit-itemsLeft[0].weight);
    const leaveIt = knapsack(left, weightLimit);
    return (takeIt>leaveIt) ? takeIt : leaveIt;
  }
} 

//second recursive solution with tracking
const knapsack = (itemsLeft, weightLimit) => {
  const selected = {
    value: 0,
    list: []
  };
  if(itemsLeft.length===0 || weightLimit===0) return selected;
  if(itemsLeft[0].weight > weightLimit){
    return knapsack(itemsLeft.slice(1), weightLimit);
  }
  else{
    const leaveIt = knapsack(itemsLeft.slice(1), weightLimit);
    const considerTakeIt=knapsack(itemsLeft.slice(1), weightLimit-itemsLeft[0].weight);
    considerTakeIt.list.push(itemsLeft[0]);
    const takeIt={
      value: itemsLeft[0].value+considerTakeIt.value,
      list: considerTakeIt.list
    };
    return (takeIt.value > leaveIt.value) ? takeIt : leaveIt;

  }
}


//dynamic programming with matrix
const knapsackAdvanced = ( items, weightLimit) => {
  const table = [];
  for(let i =0; i<items.length;i++){
    table.push([]);
    for(let capacity=0; capacity<=weightLimit;capacity++){
      if(i === 0){
        table[itemIndex].push(0);
        continue;
      }
      table[i][capacity]=takeItOrLeaveIt(table[i-1], items[i-1],capacity);
    }
  }
  return table[items.length][weightLimit];
};

const takeItOrLeaveIt = (statusCondition, item, capacity) => {
  let takeIt=0;
  let leaveIt = statusCondition[capacity];
  if(item.weight<=capacity){
    let remainingCapacity = capacity-item.weight;
    takeIt += item.value;
    takeIt += statusCondition[remainingCapacity];
  }
  return Math.max(take, not);
}

module.exports = { knapsack, knapsackAdvanced };