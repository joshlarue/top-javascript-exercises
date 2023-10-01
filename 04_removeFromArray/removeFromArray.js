const removeFromArray = function(inputArray, ...toRemove) {
    let resultArray = [];
    inputArray.forEach((item) => {
        if (!toRemove.includes(item)) {
            resultArray.push(item);
        }
    });
    return resultArray;
}

//removeFromArray([1, 2, 3, 4, 5], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
