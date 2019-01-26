# Currency Utility

This package can be used to correctly represent monetary values in Indian and International Format.

The values are comma separated on the basis of format specified.


### Formats Availability

Currently there are 2 formats supported by the package
 - IndianFormat - last comma at 3 digits and subsequently after 2 digits from the right
     - example : ₹ 1,00,000 ,₹ 1,00,00,000
 - InternationalFormat - Comma subsequently after 3 digits from the right
     - example : $ 1,000,000 , $ 1,000,000,000


### Usage
####  getFormattedCurrencyString(value,format) 
##### returns a string with currency symbol and comma representaion


```
const currencyUtility = require('currencyutility');
const formats = require('currencyutility/CurrencyFormats');

let indianFormatRepresentation = 
currencyUtility.getFormattedCurrencyString(1500000,formats.IndianFormat);  // 15 lakh

console.log(indianFormatRepresentation);   // Outputs:  ₹ 15,00,000

let internationalFormatRepresentation = 
currencyUtility.getFormattedCurrencyString(1500000,formats.InternationalFormat)  // 1.5 million

console.log(internationalFormatRepresentation); // Outputs: $ 1,500,000
```