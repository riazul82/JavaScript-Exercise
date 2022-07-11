function findLCM(num1, num2) {
    let max = (num1 > num2) ? num1 : num2;
    let lcm = max;

    while (1) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            return lcm;
        }

        lcm += max;
    }
}

let res = findLCM(12, 30);
console.log(res);