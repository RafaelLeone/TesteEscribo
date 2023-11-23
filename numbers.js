function numbers(number) {
    var total = [];

    for (var i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total.push(i);
        }
    }

    var result = total.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);

    console.log(result);
}

numbers(11);
