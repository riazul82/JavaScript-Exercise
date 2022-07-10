function checkCharacter(ch) {
    if (ch >= 0 && ch <= 9) {
        console.log(`'${ch}' is a digit!`);
    } else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        console.log(`'${ch}' is an alphabet!`);
    } else {
        console.log(`'${ch}' is a special character!`);
    }
}

checkCharacter(0);
checkCharacter('9');
checkCharacter('a');
checkCharacter('K');
checkCharacter('*');