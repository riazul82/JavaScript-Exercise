function findHCF(num1, num2) {
    let min = (num1 > num2) ? num2 : num1;
    let hcf = null;

    for (let i = 1; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i;
        }
    }

    return hcf;
}

let res = findHCF(12, 30);
console.log(res);