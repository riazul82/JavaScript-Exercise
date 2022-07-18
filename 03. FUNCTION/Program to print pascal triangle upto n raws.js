let fact = (num) => {
    let factorial = 1;
    while (num) {
        factorial *= num;
        num--;
    }
    return factorial;
}

let pascalTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j <= i; j++) {
            str += fact(i) / (fact(j) * fact(i - j)) + ' ';
        }
        console.log(str);
    }
}

pascalTriangle(10);