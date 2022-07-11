function frequencyDigits(num) {
    let n = num;
    let freq = [];

    for (let i = 0; i < 10; i++) {
        freq[i] = 0;
    }

    while (n != 0) {
        freq[n % 10]++;
        n = parseInt(n / 10);
    }

    for (let i = 0; i < 10; i++) {
        console.log(`${i} ---> ${freq[i]} times`);
    }

}

frequencyDigits(12332105678994);