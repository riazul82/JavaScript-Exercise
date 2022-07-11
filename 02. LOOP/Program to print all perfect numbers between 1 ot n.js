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

function allPerfect(n) {
    for (let i = 1; i <= n; i++) {
        if (isPerfect(i)) {
            console.log(i);
        }
    }
}

allPerfect(500);