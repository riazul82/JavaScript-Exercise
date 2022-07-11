function pow(base, exp) {
    let mul = 1;

    while (exp) {
        mul *= base;
        exp--;
    }

    return mul;
}

let res = pow(3, 4);
console.log(res);