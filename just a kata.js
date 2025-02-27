function isPalindrome(x) {
    return x.toLowerCase().split('').join('') === x.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome("bob"));
