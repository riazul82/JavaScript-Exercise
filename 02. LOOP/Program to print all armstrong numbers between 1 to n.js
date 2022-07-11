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

function allArmstrong(n){
    for(let i = 1; i <= n; i ++){
        if(isArmstrong(i)){
            console.log(i);
        }
    }
}

allArmstrong(500);