let calculateNotes = (amount) => {
    let oneThousand, fiveHundred, twoHundred, oneHundred;
    let fifty, twenty, ten, five, two, one;

    oneThousand = parseInt(amount / 1000);
    amount = amount % 1000;

    fiveHundred = parseInt(amount / 500);
    amount = amount % 500;

    twoHundred = parseInt(amount / 200);
    amount = amount % 200;

    oneHundred = parseInt(amount / 100);
    amount = amount % 100;

    fifty = parseInt(amount / 50);
    amount = amount % 50;

    twenty = parseInt(amount / 20);
    amount = amount % 20;

    ten = parseInt(amount / 10);
    amount = amount % 10;

    five = parseInt(amount / 5);
    amount = amount % 5;

    two = parseInt(amount / 2);
    amount = amount % 2;

    one = amount;


    console.log(`1000 --> ${oneThousand}`);
    console.log(`500 --> ${fiveHundred}`);
    console.log(`200 --> ${twoHundred}`);
    console.log(`100 --> ${oneHundred}`);
    console.log(`50 --> ${fifty}`);
    console.log(`20 --> ${twenty}`);
    console.log(`10 --> ${ten}`);
    console.log(`5 --> ${five}`);
    console.log(`2 --> ${two}`);
    console.log(`1 --> ${one}`);
}

calculateNotes(5999);