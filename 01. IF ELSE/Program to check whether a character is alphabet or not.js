function checkChar(char) {
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        console.log(`'${char}' is Alphabet!`);
    } else {
        console.log(`'${char}' is not Alphabet!`);
    }
}

checkChar('A');
checkChar('x');
checkChar('1');