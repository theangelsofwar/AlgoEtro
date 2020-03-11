def run_test(solution):
  print("Testing for an array of size 11 with +5 jumps forward, -2 jumps backward, up to 9 moves")
  print("Output: " + str(solution([0 for _ in range(11)], 5, 2, 9)))
  print("Expected: 7")
  print("~~~~~~~~~~~~~~~~~")
  print("Testing for an array of size 11 with +5 jumps forward, -2 jumps backward, up to 8 moves")
  print("Output: " + str(solution([0 for _ in range(11)], 5, 2, 8)))
  print("Expected: 1")