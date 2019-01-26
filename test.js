const CurrencyUtility = require("./index")
const CurrencyFormats = require("./CurrencyFormats");
// unit-testing upto 1billion / 100 crores
var value = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000,
];
console.log('Indian Formatted String');
value.map(function (x) { return console.log(CurrencyUtility.getFormattedCurrencyString(x, CurrencyFormats.IndianFormat)); });
console.log('International Formatted String');
value.map(function (x) { return console.log(CurrencyUtility.getFormattedCurrencyString(x, CurrencyFormats.InternationalFormat)); });
