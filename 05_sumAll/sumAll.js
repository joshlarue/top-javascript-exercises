const sumAll = function(numA, numB) {
    let sum = 0;
    if (numA < 0 || numB < 0 || typeof(numA) != 'number' || typeof(numB) != 'number') {
        return "ERROR";
    }

    if (numA > numB) {
        for (let i = numB; i <= numA; i++) {
            sum += i;
        }
    } else {    
        for (let i = numA; i <= numB; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
