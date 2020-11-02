const reverse = (arr: number []): number[] => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverse([26, 42, 16, 22, 8, 7, 4, 5]))
