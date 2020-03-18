#dp O[profits.length][capacity+1s] time O(N*C) space
def solve_knapsack(profits,weights, capacity):
  dp=[[-1 for x in range(capacity+1)] for y in range(len(profits))]
  return knapsack_recursive(dp, profits, weights, capacity, 0)

def knapsack_recursive(dp, profits, weights, capacity, currentIndex):
  #base check
  if capacity <= 0 or currentIndex >= len(profits):
    return 0
  
  #memoize
  if dp[currentIndex][capacity] != -1:
    return dp[currentIndex][capacity]

  profit1=0 #takeit
  if weights[currentIndex] <=capacity:
    profit1 = profits[currentIndex]+ knapsack_recursive(
      dp, profits, weights, capacity-weights[currentIndex], currentIndex+1)

  #leaveit
  profit2=knapsack_recursive(
    dp, profits, weights, capacity, currentIndex+1)

  dp[currentIndex][capacity] = max(profit1,profit2)
  return dp[currentIndex][capacity]


def main():
  print(solve_knapsack([1,6,10,16],[1,2,3,5],7))
  print(solve_knapsack([1,6,10,16],[1,2,3,5],6))


main()