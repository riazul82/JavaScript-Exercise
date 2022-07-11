function factorial(n) {
    let fact = 1;

    while (n) {
        fact *= n;
        n--;
    }

    return fact;
}

function isStrong(num) {
    let n = num, sum = 0;

    while (n) {
        sum += factorial(n % 10);
        n = parseInt(n / 10);
    }

    if (sum === num) {
        return true;
    } else {
        return false;
    }
}

function allStrong(n) {
    for (let i = 1; i <= n; i++) {
        if (isStrong(i)) {
            console.log(i);
        }
    }
}

allStrong(500);