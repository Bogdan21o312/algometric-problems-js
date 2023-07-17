function isSymmetricArray(array) {
    const n = array.length;
    for (let i = 0; i < n / 2; i++) {
        if (array[i] !== array[n - 1 - i]) {
            return false;
        }
    }
    return true;
}

const arr1 = [1, 2, 3, 2, 1];
const arr2 = [1, 2, 3, 4, 5];

console.log(isSymmetricArray(arr1)); // true
console.log(isSymmetricArray(arr2)); // false
