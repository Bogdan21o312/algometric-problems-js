function checkPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(checkPalindrome("radar"));   
console.log(checkPalindrome("hello"));   
console.log(checkPalindrome("level"));   
console.log(checkPalindrome("algorithm"));
