function findDigits(num) {
    let str = String(num);
    let firstDigit = str.split('')[0];
    let lastDigit = str[str.length - 1];
    console.log(`First digit: ${firstDigit}`);
    console.log(`Last digit: ${lastDigit}`);
}

findDigits(1234543848785831);