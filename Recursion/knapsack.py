#python3 syntax changes from Solution(object) or self class

def solve_knapsack(profits, weights, capacity):
  return knapsack_recursive(profits, weights, capacity, 0)


def knapsack_recursive(profits, weights, capacity, currentIndex):
  #base case check
  if capacity <= 0 or currentIndex >= len(profits):
    return 0


  #recursive case, if element at current index exceeds capacity, then leave
  profit1 = 0
  if weights[currentIndex] <= capacity:
    profit1 = profits[currentIndex] + knapsack_recursive(
      profits, weights, capacity-weights[currentIndex], currentIndex+1)

  #recursive call after exclude element at current index
  profit2 = knapsack_recursive(profits, weights, capacity,currentIndex+1)

  return max(profit1, profit2)

def main():
  print(solve_knapsack([1,6,10,16], [1,2,3,5], 7))
  print(solve_knapsack([1,6,10,16],[1,2,3,5],6))


main()

