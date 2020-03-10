#counting the number of inversions that need to achieve a sorted array
#is esentially counting the number of swaps in a merge sort

#method 2: inefficient brute for case On^2
def getInvCount(arr,n):
  inv_count = 0;
  for i in range(n):
    for j in range(i+1,n):
      if (arr[i]>arr[j]):
        inv_count+=1;


  return inv_count


#driver code 
arr=[1,20,6,4,5]
#i love python omgggggggggg this is litttttyyyyyy afffff
#lmao why did I learn java in highschool when python is litttttt
#slivinggggggg
n= len(arr)
print("Line 20s of countingInversions.py and the number of inversions are", getInvCount(arr,n))



#method 2 enhance the merge sort
def mergeSort(arr,n):
  temp_arr = [0]*n
  return _mergeSort(arr, temp_arr, 0, n-1)

#helper function
def _mergeSort(arr, temp_arr, left, right):
  inv_count=0
  #TODO see closures in Python, recursive contexts
  if left < right:
    mid=(left + right)//2
    #this // is floor division in python
    inv_count+=_mergeSort(arr, temp_arr, left, mid)
    inv_count+=_mergeSort(arr, temp_arr, mid+1, right)
    inv_count+=merge(arr,temp_arr, left, mid, right)
  return inv_count


#to merge the arrays and add the number of swaps
  def merge(arr, temp_arr, left, mid, right):
    i = left
    j = mid + 1
    k = left
    inv_count = 0

    while i <= mid and j <= right:
      
      if arr[i] <= arr[j]:
        temp_arr[k] = arr[i]
        k += 1
        i += 1
      else:
        #inversion 
        temp_arr[k] = arr[j]
        inv_count += (mid-i + 1)
        k += 1
        j += 1

    # copy remaining elements of left subarray into temp array
    while i <= mid:
      temp_arr[k] = arr[i]
      k += 1 
      i += 1

    #copy the remaining elements of the right subarray 
    while j <= right: 
      temp_arr[k] = arr[j]
      k += 1
      j += 1

    #now copy the sorted subarray into the original array
    for loop_var in range(left, right + 1): 
      arr[loop_var] = temp_arr[loop_var]

    return inv_count


    #Driver code
    arr = [1, 20, 6, 4, 5]
    n = len(arr)
    result = mergeSort(arr,n)
    print("Inversions, saucin are ", result)

    
