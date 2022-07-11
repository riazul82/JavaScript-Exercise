function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c = 0;

    while (n) {
        console.log(c);
        a = b;
        b = c;
        c = a + b;

        n--;
    }
}

fibonacci(10);