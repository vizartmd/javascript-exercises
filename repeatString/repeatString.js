const repeatString = function(str, n) {
    var tempStr = '';
    if(n == 0) {
        return tempStr;
    } else if (n < 0) {
        return 'ERROR';
    } else {
        for(let i = 0; i < n; i++) {
            tempStr += str;
        }
        return tempStr;         
    }
  
}

module.exports = repeatString
