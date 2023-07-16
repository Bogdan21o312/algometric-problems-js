function eachCons(array, n) {
    const r = [];
    for (let index = 0; index <= array.length - n; index++) {
        const chunk = [];
        for (let j = index; j < index + n; j++) {
            chunk.push(array[j]);
        }
        r.push(chunk);
    }
    return r;
}

const inputArray = [1, 2, 3, 4, 5];
const n = 3;

const result = eachCons(inputArray, n);
console.log(result); // Output: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
