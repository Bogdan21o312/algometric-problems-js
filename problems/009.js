function sumOfPositiveElements(array) {
    let sum = 0;
    for (const num of array) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

const numbers = [1, -2, 3, -4, 5];
console.log(sumOfPositiveElements(numbers)); // 9 (1 + 3 + 5)
