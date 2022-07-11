function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeFactors(num) {
    if (isPrime(num)) {
        console.log(num);
        return;
    }

    let len = parseInt(num / 2);

    for (let i = 1; i <= len; i++) {
        if (num % i === 0 && isPrime(i)) {
            console.log(i);
        }
    }
}

primeFactors(15);