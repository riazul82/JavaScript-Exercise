function checkPalindrome(num) {
    let str = String(num);
    let arr = str.split('');
    if (num === parseInt(arr.reverse().join(''))) {
        console.log(`'${num}' is Palindrome!`);
    } else {
        console.log(`'${num}' is not Palindrome!`);
    }
}

checkPalindrome(123454321);
checkPalindrome(123456789);