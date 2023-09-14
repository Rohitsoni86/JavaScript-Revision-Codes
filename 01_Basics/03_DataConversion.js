// Note ::: Most of the Time we get String As Input passed by from browser and we need to convert from one Data to Another in most of the Senarioes So it is Equally Important.

let anyNumber = 33333;

let numbConvertedToString = String(anyNumber);

console.log(numbConvertedToString);

console.log(typeof numbConvertedToString);

let myAge = "33";

console.log(typeof myAge); // String

console.log(typeof Number(myAge)); // Converted To Number

let myAttend = "";

console.log(Boolean(myAttend)); //Empty String as false

let myAttend2 = "Yes Sir";
console.log(Boolean(myAttend2)); //True As String
