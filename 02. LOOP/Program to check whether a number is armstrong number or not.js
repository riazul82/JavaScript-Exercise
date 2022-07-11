function isArmstrong(num) {
    let n = num, sum = 0;
    let len = parseInt(Math.log10(num) + 1);

    while (n) {
        let x = n % 10;
        sum += Math.pow(x, len);
        n = parseInt(n / 10);
    }

    if (sum === num) {
        return true;
    } else {
        return false;
    }
}

let res = isArmstrong(153);
console.log(res);