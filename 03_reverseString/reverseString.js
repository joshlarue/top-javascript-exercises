const reverseString = function(stringToReverse) {
    let arrayToReverse = stringToReverse.split('');
    let reversedArray = [];
    for (let i = 0; i < stringToReverse.length; i++) {
        reversedArray[i] = arrayToReverse[arrayToReverse.length - 1 - i];
    }
    let reversedString = reversedArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
