// Item class
public static class Item {
  int weight;
  int value;
      
  public Item(int weight, int value) {
      this.weight = weight;
      this.value = value;
  }
}
  
// Recursively check every combination of items by traversing list of items
// and either including or excluding each item
public static int naiveKnapsack(Item[] items, int W) {
  return naiveKnapsack(items, W, 0);
}
  
// Overloaded recursive function for naiveKnapsack
private static int naiveKnapsack(Item[] items, int W, int i) {
  // Return when we reach the end of the list
  if (i == items.length) return 0;
      
  // If item is heavier than remaining weight, skip item
  if (W - items[i].weight < 0) return naiveKnapsack(items, W, i+1);
      
  // Try both including and excluding the current item
  return Math.max(naiveKnapsack(items, W - items[i].weight, i+1) + items[i].value,
                  naiveKnapsack(items, W, i+1));
}
  
// Recursive solution that uses a cache to improve performance
public static int topDownKnapsack(Item[] items, int W) {
  // Map: i -> W -> value
  // Use a map instead of array because the data could be very sparse
  Map<Integer, Map<Integer, Integer>> cache = new HashMap<Integer, Map<Integer, Integer>>();
  return topDownKnapsack(items, W, 0, cache);
}
  
// Overloaded recursive function for topDownKnapsack
private static int topDownKnapsack(Item[] items, int W, int i, Map<Integer, Map<Integer, Integer>> cache) {
  // Return when we reach the end of the list
  if (i == items.length) return 0;
      
  // Check the cache and return value if we get a hit
  if (!cache.containsKey(i)) cache.put(i, new HashMap<Integer, Integer>());
  Integer cached = cache.get(i).get(W);
  if (cached != null) return cached;
      
  // If item is heavier than remaining weight, skip item
  if (W - items[i].weight < 0) return topDownKnapsack(items, W, i+1, cache);
   
  // Try both including and excluding the current item
  int toReturn = Math.max(topDownKnapsack(items, W - items[i].weight, i+1, cache) + items[i].value,
                          topDownKnapsack(items, W, i+1, cache));
  cache.get(i).put(W, toReturn);
  return toReturn;
}
  
// Iterative dynamic programming solution
public static int bottomUpKnapsack(Item[] items, int W) {
  // cache[i][j] = max value for the first i items with a max weight of j
  int[][] cache = new int[items.length + 1][W + 1];
  for (int i = 1; i <= items.length; i++) {
      for (int j = 0; j <= W; j++) {
          // If including item[i-1] would exceed max weight j, don't 
          // include the item. Otherwise take the max value of including
          // or excluding the item
          if (items[i-1].weight > j) cache[i][j] = cache[i-1][j];
          else cache[i][j] = Math.max(cache[i-1][j], cache[i-1][j-items[i-1].weight] + items[i-1].value);
      }
  }
      
  return cache[items.length][W];
}