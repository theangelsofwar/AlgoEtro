
class Solution(object):
  def findThreeLargestNumbers(self, array):
    result = [None, None, None]
    for num in array:
      self._updateLargest(result, num)
    return result 

  def _updateLargest(self, threeLargest, num):
    if threeLargest[2] is None or num > threeLargest[2]:
      self._shiftAndUpdate(threeLargest, num, 2)
    elif threeLargest[1] is None or num > threeLargest[1]:
      self._shiftAndUpdate(threeLargest, num ,1)
    elif threeLargest[0] is None or num > threeLargest[0]:
      self._shiftAndUpdate(threeLargest, num, 0)

  def _shiftAndUpdate(self, array, num, index):
    # [0, 1, 2] 
    for i in range(index+1):
      #indexes are inclusive for range in py
      if i == index:
        array[i] = num
      else:
        array[i] = array[i+1]


print(Solution().findThreeLargestNumbers([51,5,17,-222,-1,0,21,217,166,2]  ))
#51, 217, 166