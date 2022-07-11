function digitSum(num) {
    let str = String(num);
    let firstDigit = parseInt(str.split('')[0]);
    let lastDigit = parseInt(str[str.length - 1]);

    return firstDigit + lastDigit;
}

let res = digitSum(1234543848785831);
console.log(res);