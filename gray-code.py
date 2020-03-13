"""
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

Example 1:

Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
Example 2:

Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].
"""
class Solution(object):
  def grayCode(self, n):
    """
    side note: is greycode used to focus a camera? Calibration, overshoot then refocus...
    :type n: int
    :rtype: List[int]

    classic approach: 
      -mirror reversed numbers of previous and add 1
      e.g.
        n=1 [0, 1] (00, 01)
        n=2 [00, 01, 11, 10]
        n=3 [00, 01, 11, 10, 110, 111, 101, 100]
    """
    if n < 1:
      return [0]
    res = [0, 1]
    cnt = 1
    while cnt < n:
      mirror = []
      for i in range(len(res) - 1, -1, -1):
        temp = res[i] + (1 << cnt)
        mirror.append(temp)
        cnt += 1
    return res

a = 1
b = a + (1 << 1)
print(a, b)

print(Solution().grayCode(-1))
print(Solution().grayCode(0))
print(Solution().grayCode(1))
print(Solution().grayCode(2))
print(Solution().grayCode(3))
print(Solution().grayCode(4))