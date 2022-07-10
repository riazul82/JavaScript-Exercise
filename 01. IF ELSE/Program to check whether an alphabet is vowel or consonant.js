function checkAlphabet(ch) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        console.log(`'${ch}' is vowel!`);
    } else if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
        console.log(`'${ch}' is vowel!`);
    } else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        console.log(`'${ch}' is consonant!`);
    } else {
        console.log(`'${ch}' is not an alphabet!`);
    }
}

checkAlphabet('a');
checkAlphabet('I');
checkAlphabet('k');
checkAlphabet('F');
checkAlphabet('1');