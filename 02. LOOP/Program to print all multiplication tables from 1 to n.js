function printTables(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`Table ${i}x:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} X ${j} = ${i * j}`);
        }
        console.log('\n');
    }
}

printTables(3);