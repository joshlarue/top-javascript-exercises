const repeatString = function(string, num) {
    let repeatedString = "";
    if (string == '') {
        return '';
    } else if (num < 0) {
        return "ERROR";
    } else {
        while (num > 0) {
            repeatedString += string;
            num--;
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
