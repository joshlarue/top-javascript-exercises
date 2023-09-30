const removeFromArray = function(inputArray, toRemove) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == toRemove) {
            inputArray.splice(i, 1);
            return inputArray;
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
