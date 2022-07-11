function factorial(num) {
    let n = num;
    let fact = 1;

    while (n) {
        fact *= n;
        n--;
    }

    return fact;
}

let res = factorial(5);
console.log(res);