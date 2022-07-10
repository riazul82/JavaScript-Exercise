function checkYear(year) {
    if (year % 400 === 0) {
        console.log('Leap Year!');
    } else if (year % 100 === 0) {
        console.log('Not Leap Year!');
    } else if (year % 4 === 0) {
        console.log('Leap Year!');
    } else {
        console.log('Not Leap Year!');
    }
}

checkYear(1804);