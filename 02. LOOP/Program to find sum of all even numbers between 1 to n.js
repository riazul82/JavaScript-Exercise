function findSum(n) {
    let sum = 0;

    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    return sum;
}

let res = findSum(10);
console.log(res);