function countDigits(num) {
    return Math.floor(Math.log10(num) + 1);
}

let digits = countDigits(12345);
console.log(digits);