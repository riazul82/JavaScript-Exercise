let checkVar = (variable) => {
    if (variable === null) {
        console.log('Variable is null!');
    } else if (variable === undefined) {
        console.log('Variable is undefined!');
    } else {
        console.log('Variable is neither undefined nor null!');
    }
}

checkVar(2);
checkVar(undefined);
checkVar(true);
checkVar(null);
checkVar('Hello');