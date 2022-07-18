let sum = (a = 2, b = 3, c = a + b) => {
    return a + b + c;
}

console.log(sum(4, 4, 2));
console.log(sum(8, 2));
console.log(sum(2));
console.log(sum());