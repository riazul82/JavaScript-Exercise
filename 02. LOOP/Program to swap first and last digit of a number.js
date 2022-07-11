function swapDigits(num) {
    let str = String(num);
    let arr = str.split('');
    let firstDigit = arr[0];
    let lastDigit = arr[arr.length - 1];

    arr[0] = lastDigit;
    arr[str.length - 1] = firstDigit;

    return parseInt(arr.join(''));
}

let res = swapDigits(1234543848785839);
console.log(res);