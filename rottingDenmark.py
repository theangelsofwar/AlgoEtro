"""
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

EX. 1
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

EX. 2
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

EX. 3
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

  1st approach: breadth first search
    -2D array, calculate distance
    -if still 1 in the distance is not calculated, return -1
"""
class Solution(object):
  def orangesRotting(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """

    if len(grid) == 0 or len(grid[0]) == 0:
      return 0
    
    dist = []
    for _ in range(len(grid)):
      dist.append(len(grid[0]) * [sys.maxsize])

    for i in range(len(grid)):
      for j in range(len(grid[0])):
        if grid[i][j] == 2:
          self.bfs(i, j, grid, dist)

    res = 0
    for i in range(len(grid)):
      for j in range(len(grid[0])):
        if grid[i][j] == 1:
          if dist[i][j] == sys.maxsize:
            return -1
          else:
            res = max(res, dist[i][j])
    return res

  def bfs(self, x, y, grid, dist):
    
    seen = set()

    q = [(x, y, 0)]
    while len(q) > 0:
      i, j, steps = q.pop(0)
      if i < 0 or i+1 > len(grid) or j < 0 or j+1 > len(grid[0]):
        continue
      if(i == x and j == y) or grid[i][j] == 1:

        key = (i, j)
        if key in seen:
          continue
        seen.add(key)

        dist[i][j] = min(dist[i][j], steps)

        q.append((i-1, j, steps+1))
        q.append((i+1, j, steps+1))
        q.append((i, j-1, steps+1))
        q.append((i, j+1, steps+1))
