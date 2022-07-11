function productDigits(num) {
    let str = String(num);
    let arr = str.split('');

    Array.prototype.product = function () {
        return this.reduce((curr, prev) => curr * prev);
    }

    return arr.product();
}

let res = productDigits(123);
console.log(res);