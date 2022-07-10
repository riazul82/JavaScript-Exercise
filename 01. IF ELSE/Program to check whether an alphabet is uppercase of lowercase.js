function checkAlphabet(ch) {
    if (ch >= 'A' && ch <= 'Z') {
        console.log(`'${ch}' is Uppercase!`);
    } else if (ch >= 'a' && ch <= 'z') {
        console.log(`'${ch}' is Lowercase!'`);
    } else {
        console.log(`'${ch}' is not an Alphabet!`);
    }
}

checkAlphabet('a');
checkAlphabet('V');
checkAlphabet('$');