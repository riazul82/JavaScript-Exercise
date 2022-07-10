function isValid(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log('Triangle is valid!');
    } else {
        console.log('Triangle is not valid!');
    }
}

isValid(10, 20, 30);
isValid(3, 4, 5);