let str = '';

for(let i = 65; i <= 90; i ++){
    str += String.fromCharCode(i) + ' ';
}

console.log('Uppercase: ' + str);

str = '';

for(let i = 97; i <= 122; i ++){
    str += String.fromCharCode(i) + ' ';
}

console.log('Lowercase: ' + str);