# Jack is hopping backwards and forwards in an array of size n. He starts in cell 0 and can hop f cells forwards or b cells backwards. He is allowed to jump up to max_jumps times. How many ways can he reach the last cell and finish the game?


from test_runner import run_test

#"Those who can't do, teach. Those who can't teach, teach gym" #changpagne2024
#shamwoohoo

def num_ways_helper(arr, current_index, jumps_left, f, b, cache):
  n = len(arr)

  #bruhhhhhhh python is so much more lit than java
  #my opinions are my own don't come for me
  if current_index == n - 1:
    return 1
  if current_index < 0 or current_index >= n:
    return 0
  if jumps_left == 0:
    return 0

  key = (current_index, jumps_left)
  if key in cache:
    output = cache[key]
    print("From cache on line 20s: cache: key={}".format(str(key), jumps_left))
    return cache[key]

  back_solution = back_solution + forward_solution
  cache[key] = back_solution
  return solution

def num_ways(arr, f, b, max_jumps):
  return num_ways_helper(arr, 0, max_jumps, f, b, {})

run_test(num_ways)



#What did C8 say to 0101 at Coachella? Drop the base. 


  #herro rorld


