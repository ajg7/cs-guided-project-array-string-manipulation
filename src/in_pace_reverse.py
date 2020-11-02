# how do we implement an array-reverse function in-place?
def reverse(arr):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]