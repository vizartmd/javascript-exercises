const sumAll = function(a, b) {
    let sum = null;
    if(isNaN(a) || isNaN(b) || a < 0 || b < 0 || typeof a == 'string' || typeof b == 'string') {
        return 'ERROR';
    }
    if(a === b) {
        sum = a + b;
        return sum;
    }
    if(a < b) {
        sum = a;
        for(let i = a + 1; i <= (b - a) + 1; i++) {
            sum += i;
        }
        return sum;
    }
    if(a > b) {
        sum = b;
        for(let i = b + 1; i <= (a - b) + 1; i++) {
            sum += i;
        }
        return sum;
    }
}

module.exports = sumAll
