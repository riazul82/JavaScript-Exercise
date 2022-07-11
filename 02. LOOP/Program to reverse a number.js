function reverseNum(num) {
    let str = String(num);
    let arr = str.split('');
    return parseInt(arr.reverse().join(''));
}

let res = reverseNum(1234567898765432);
console.log(res);