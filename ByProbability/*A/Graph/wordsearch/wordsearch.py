#Leet 79
"""
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
"""
# key ideas: Back track, depth first search
#python3 static typing
class Solution:
  def exist(self, board: List[List[str]], word: str) -> bool:
    
    #recursive function, r, c are the positions on the board location
    def recur(word, r, c):
      #if characters don't match
      if word[0] !=board[r][c]:
        return False
      if len(word) == 1:
        return True
        #base case
      
      ans =False
      #default
      #add the current position on grid to used, pairs 
      used.add((r,c))
      #check for previous positions surrounding to traverse/not checked/expanded yet
      if r > 0 and (r-1, c) not in used:
        #bitwise or, get the recusive call of the substring word remaining
        ans |= recur(word[1:], r-1, c)
      if c > 0 and (r, c-1) not in used and not ans:
        ans |= recur(word[1:],r, c-1)
      #within bounds of the board
      if r < len(board)-1 and (r+1, c) not in used and not ans:
        ans |= recur(word[1:],r+1,c)
      if c < len(board[0])-1 and (r, c+1) not in used and not ans:
        ans |= recur(word[1:], r, c+1)
      used.remove((r, c))
      return ans

    used = set()
    for r in range(len(board)):
      for c in range(len(board[0])):
        if recur(word, r, c):
          # //for starting position in the board
          return True

    return False