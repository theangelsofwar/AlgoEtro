//2D regular(not optimized DP)
function regDP(nums) {
  let sum = 0;

  for(let num of nums){
    sum +=num;
  }

  if((sum & 1) == 1){
    return false;
  }

  hSum = sum/2;

  //store cache, fil in smaller repeated subproblems
  const DP = new Array(nums.length+1);

  for(let i =0; i< DP.length; i++){
    DP[i] = (new Array(hSum+1)).fill(false);
  }

  for(let i =0; i<(nums.length+1); i++){
    DP[0][i] = false;
  } 

  for(let i = 0; i< hSum+1; i++){
    DP[0][i]= false;
  }

  DP[0][0] = true;

  for(let i =1; i< nums.length+1; i++){
    for(let s = 1; s<(hSum+1); s++){
      const currentNum = nums[i-1];
      if(currentNum > s){
        DP[i][s] = DP[i-1][s];
      } else {
        const takeIt = DP[i-1][s-currentNum];
        const leaveIt = DP[i-1][s];
        DP[i][s] = takeIt || leaveIt;
      }
    }
  }

  return DP[nums.length][hSum]
}


//Optimized DP
function optDP(nums) {
  let sum = 0;

  for (let num of nums){
    sum += num;
  }

  if((sum & 1) == 1){
    return false;
  }

  hSum = 2;

  const DP = (new Array(hSum+1)).fill(false);
  DP[0] = true;

  for(let i = 0; i< nums.length; i++){
    for(let s = hSum; s>0; s--){
      if(nums[i] > s){
        //do nothing
      } else {
        const takeIt = DP[s-nums[i]]

        const leaveIt = DP[s]

        DP[s] = takeIt || leaveIt;
      }
    }
  }
  return DP[hSum]
}