var romanNumerals = [
  ["","I","II","III","IV","V","VI","VII","VIII","IX"],
  ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
  ["", "M", "MM", "MMM"]
  ];

  function convert(originalNumber) {
    var numeral = "";
    var digits = originalNumber.toString().split('').reverse();
    for (var i=0; i < digits.length; i++){
      numeral = romanNumerals[i][parseInt(digits[i])] + numeral;
    }
    return numeral;
  }


$(document).ready(function(){
  var originalNumber = parseInt(prompt("Enter a number:"));
  var result = convert(originalNumber);
  $("#result").text(result);
});
