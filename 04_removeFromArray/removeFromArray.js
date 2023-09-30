const removeFromArray = function(inputArray, ...toRemove) {
    console.log(toRemove);
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < toRemove.length; j++) {
            if (inputArray[i] == toRemove[j]) {
                inputArray.splice(i, 1);
                console.log(inputArray);
            }
        }
    }
    return inputArray;
}

removeFromArray([1, 2, 3, 4, 5], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
