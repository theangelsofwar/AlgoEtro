#permutations of the string s
def numDecodings(self, s: str) -> int:
  memo = {'':1}
  #memo is outside the context, decode is a closure function in python
  def decode(s):
    #if s is a key in the memo
    if s in memo: 
      return memo[s]
    if s[0]=='0':
      return 0
      #base case for substring recursive call
    if len(s) == 1:
      return 1
      #base case
    memo[s] = decode(s[1:])
    #memoize the string with it's substring, taking only the current char
    #much like Fibonacci
    if int(s[0:2]) <=26:
      #if ascii is lexicographic
      memo[s] += decode(s[2:])
      #append to the cache
    return memo[s]
  return decode(s)
  #returning the inner funcition, but rather than sending the function definition, return invocation 