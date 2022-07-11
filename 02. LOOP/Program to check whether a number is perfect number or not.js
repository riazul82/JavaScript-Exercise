function isPerfect(num) {
    let sum = 0;
    let len = parseInt(num / 2);

    for (let i = 1; i <= len; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        return true;
    } else {
        return false;
    }
}

let res = isPerfect(496);
console.log(res);