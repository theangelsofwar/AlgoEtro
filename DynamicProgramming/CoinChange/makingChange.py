def MakingChange(coinVal, change):
  alist = [0]*(change+1)
  for i in range(1, change+1):
    temp = change; j = 0
    while j <= len(coinVal)-1 and i >= coinVal[j]:
      temp = min(alist[i-coinVal[j]], temp)
      j += 1
    alist[i] = temp + 1
  return alist.pop()

def coinRow(coinrow):
  alist = [0]*(len(coinrow)+1)
  alist[1] = coinrow[0]
  for i in range(2, len(coinrow)+1):
    alist[i] = max(coinrow[i-1]+alist[i-2], alist[i-1])
  return alist.pop()

print(coinRow([5,1,2,10,6,2]))


def maxBag(weight, value, totalWeight):
  if len(weight) <= 0 or len(value) <= 0 or totalWeight <= 0 or len(weight) != len(value):
    return
  num = len(weight)
  tempMat = []
  for i in range(num+1):
    tempMat.append([0]*(totalWeight+1))
  for i in range(1, num+1):
    for j in range(1, totalWeight+1):
      if j - weight[i-1] >= 0:
        tempMat[i][j] = max(tempMat[i-1][j], value[i-1] + tempMat[i-1][j-weight[i-1]])


        #continue.....