setInterval(() => {
    let num = null;

    // random between 0-1(float)
    num = Math.random();
    console.log(`(0-1) ---> ${num}`);

    // random between 0-9
    num = Math.floor(Math.random() * 10);
    console.log(`(0-9) ---> ${num}`);

    // random between min(Inclusive)-max(Exclusive)
    // ** Math.floor(Math.random() * (max - min)) + min

    // random between 10-19
    num = Math.floor(Math.random() * (20 - 10)) + 10;
    console.log(`(10-19) ---> ${num}`);

    // random between min(Inclusive)-max(Inclusive)
    // ** Math.floor(Math.random() * (max - min + 1)) + min

    // random between 10-20
    num = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    console.log(`(10-20) ---> ${num}\n`);

}, 1000);