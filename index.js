const CurrencyFormats = require("./CurrencyFormats");
"use strict";
exports.__esModule = true;
var CurrencyUtility = /** @class */ (function () {
    function CurrencyUtility() {
    }
    CurrencyUtility.getFormattedCurrencyString = function (value, currencyFormat) {
        if (value.toString().length < 3) {
            return currencyFormat.currencySymbol + " " + value;
        }
        switch (currencyFormat) {
            case CurrencyFormats.IndianFormat:
                return this.processFormat(value, currencyFormat);
                ;
            case CurrencyFormats.InternationalFormat: return this.processFormat(value, currencyFormat);
            default: return '';
        }
    };
    CurrencyUtility.processFormat = function (value, currencyFormat) {
        var charArray = value.toString().split('').reverse();
        var resultArray = [];
        var stepCounter = 0;
        for (var i = 0; i < charArray.length; i++) {
            // if index is > 3 , add ',' after every 2 unshifts
            resultArray.unshift(charArray[i]);
            if (resultArray.length == 3)
                resultArray.unshift(',');
            if (i >= 3) {
                stepCounter++;
            }
            if (stepCounter % currencyFormat.stepCount == 0 && i > 3) {
                resultArray.unshift(',');
            }
            // console.log(i,resultArray,stepCounter);
        }
        if (resultArray[0] === ',')
            resultArray.shift();
        return currencyFormat.currencySymbol + " " + resultArray.join('');
    };
    return CurrencyUtility;
}());
module.exports =  CurrencyUtility;