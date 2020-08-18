const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    if(Number.isInteger(celsius)) {
        return celsius;
    } else {
        return parseFloat(celsius.toFixed(1));
    }
}

const ctof = function(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
    if(Number.isInteger(celsius)) {
      return fahrenheit;
  } else {
      return parseFloat(fahrenheit.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}
