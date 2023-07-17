function findUniqueElements(array) {
    const uniqueElements = [];
    const occurrences = {};

    for (const num of array) {
        occurrences[num] = occurrences[num] ? occurrences[num] + 1 : 1;
    }

    for (const num of array) {
        if (occurrences[num] === 1) {
            uniqueElements.push(num);
        }
    }

    return uniqueElements;
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(findUniqueElements(numbers)); // [1, 3, 5]
