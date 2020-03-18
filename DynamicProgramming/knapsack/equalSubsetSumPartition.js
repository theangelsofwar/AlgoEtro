//leet # 416 Partition Equal Subset Sum
// Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Note:

// Each of the array element will not exceed 100.
// The array size will not exceed 200.
 

// Example 1:

// Input: [1, 5, 11, 5]

// Output: true

// Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

// Example 2:

// Input: [1, 2, 3, 5]

// Output: false

// Explanation: The array cannot be partitioned into equal sum subsets.
// solution 1 72 ms 35.2 MB
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums )=> {
  let sum = 0;
  for(let i =0; i< nums.length; i++){
    sum += nums[i];
  }

  if(sum % 2 !== 0) return false; //cannot divide ints evenly
  sum/=2; //inversion
  let dp = new Array(sum+1).fill(false);
  dp[0] = true; //first element is true since this is dummy position

  for(let i = 0; i<nums.length; i++){
    let num = nums[i];
    for(let j = sum; j>=num; j--){
      dp[j] = dp[j] || dp[j-num];//if already true, short circuit to TRUE || FALSE = TRUE
    }
  }
  return dp[sum];
};


//solution 2 uses reduce 88ms 35.4MB
//calling reduce adds layer of function complexity and a slight lag time, the tradeoff for modularity and not having to re-create
const canPartition = (nums) => {
  const sum = nums.reduce((sum, currNum) => sum+=currNum, 0); //sum
  if(!sum%2) return false; //must be even

  const target = sum/2; //target halve the sum
  const cache = new Array(target+1).fill(false);
  cache[0] = true;

  for(let i =0; i<nums.length; i++){
    let num = nums[i];
    for(let k=target; k>=num; k--){
      cache[k] = cache[k] || cache[k-num];
    }
  }
  return cache[target];
};


// third, 80ms , 35.6MB very similar
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  let sum = 0; 
  for(let i =0; i<nums.length; i++){
    sum+=num;
  }

  if(sum%2!=0) return false;
  let half=sum/2;
  let dp=new Array(half+1).fill(false);
  dp[0]=true; //dummy placeholder
  for(let i=0; i<nums.length;i++){
    let num = nums[i];
    for(let k=0; k>=num; k--){
      dp[k]= dp[k] || dp[k-num];
    }
  }
  return dp[half];
};

//option #3 2D array, 80 ms, 35.6MB
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  let sum = nums.reduce((acc, v) => acc + v, 0)/2; //divide 2

  if(sum!==parseInt(sum)) return false;//odd

  //a dp table of dimensions nums.length+1 x sum(nums)
  const dp=[];
  for(let i =0; i<nums.length; i++){
    dp[i] = [];
    for(let j =0; j<sum+1; j++){
      dp[i][j] = false;
    }
  } //filling the d2 array elements to false

  for(let i=0; i<dp.length; i++){
    dp[i][0]= true;
  }

  for(let j=0; j<dp.length;j++){
    dp[0][j]=false;
  }

  dp[0][0]=true;

  for(let i=1; i<=nums.length;i++){
    for(let j=1; j<=sum; j++){
      if(dp[i-1][j] === true){
        dp[i][j]=true;
      }

      else if(dp[i-1][j-nums[i]] === true){
        dp[i][j]= true;
      }
      else{
        dp[i][j]=false;
      }
    }
  }
  return dp[nums.length][sum];
};


//essential explanation
//Build a "reachable numbers" in memo
//check if we can get that number with the numbers added so far
//if we can reach the target number, else we add it to the table of reachable numbers
//also 80ms, 35.6MB
const canPartition = (nums) => {
  const sum = nums.reduce((acc,num) => acc+num, 0);
  const target = sum/2;

  if(sum & 1) return false;
  if(nums[nums.length-1] > target) return false;

  const memo = new Array(target+1).fill(false);
  memo[0] = true;
  
  for(let i =0; i<nums.length;i++){
    let num=nums[i];
    if(memo[target-num]) return true;
    for(let j=target; j>=num; j--){
      memo[t] = memo[t-num];
    }
  }
  return false; 
}