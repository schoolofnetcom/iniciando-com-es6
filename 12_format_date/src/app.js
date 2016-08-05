var US = new Intl.DateTimeFormat("en-US");
var BR = new Intl.DateTimeFormat("pt-BR");
var DE = new Intl.DateTimeFormat("de-DE");

console.log(US.format(new Date("2016-05-10")));
console.log(BR.format(new Date("2016-05-10")));
console.log(DE.format(new Date("2016-05-10")));
