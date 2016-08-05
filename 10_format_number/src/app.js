var number = 123456.34;
var En = new Intl.NumberFormat('en-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);
console.log(En);
console.log(De);
