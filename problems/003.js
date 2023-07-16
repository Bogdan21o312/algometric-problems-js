function checkPassword(password) {
    if (password.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {

        return false;
    }

    if (!/[a-z]/.test(password)) {
        return false;
    }

    if (!/\d/.test(password)) {
        return false;
    }

    return true;
}

const password1 = "Abcd1234";
const password2 = "1234567";
const password3 = "Password";

console.log(checkPassword(password1)); // true
console.log(checkPassword(password2)); // false
console.log(checkPassword(password3)); // false
