function sumDigits(num) {
    let str = String(num);
    let arr = str.split('');
    return arr.reduce((curr, prev) => parseInt(curr) + parseInt(prev));
}

let res = sumDigits(1234543848785839);
console.log(res);