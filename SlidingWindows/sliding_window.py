from test_runner import run_test

def sliding_window(string, char_set):
  left, right, best_score = 0, 0, float('inf')

  letter_map = {}
  characters_encountered = 0


  while right < len(string) or characters_encountered == len(char_set): 
    if characters_encountered != len(char_set):
      curr_right = string[right] 
      if curr_right in char_set:
        letter_map[curr_right] = letter_map.get(curr_right, 0)+1
        if letter_map[curr_right] == 1:
          characters_encountered +=1  
      right += 1
    else: 
      curr_left = string[left]
      if curr_left in char_set:
        letter_map[curr_left] -=1
        if letter_map[curr_left] == 0:
          characters_encountered -=1
      left += 1 

      best_score = min(best_score, right - left +1) 
  return best_score if best_score !=float('inf') else -1

run_test(sliding_window)