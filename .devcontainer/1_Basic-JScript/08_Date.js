/*
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Notes:
Current work is going on with TC39 to implement date  function in javascript.
Manual date creation in JS counting started from 0 onwards.
e.g- 0 Jan
     1 Feb and so on.
Points to remember:
Date is an object in Javascript.
#output of all methods as compare with program:
2023-09-20T17:20:21.243Z
Wed Sep 20 2023 17:20:21 GMT+0000 (Coordinated Universal Time)
Wed Sep 20 2023
2023-09-20T17:20:21.243Z
2023-09-20T17:20:21.243Z
9/20/2023
5:20:21 PM
17:20:21 GMT+0000 (Coordinated Universal Time)
Wed, 20 Sep 2023 17:20:21 GMT
0
17
8
3
0
*/
let myDate = new Date(); //Object created for instance   :Instance = object (understanding purpose)
console.log(myDate); //It will print a Date and time.
console.log(typeof myDate); //type is = object
console.log(myDate.toString()); // It will print in seperate values
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getTimezoneOffset());

//Manually printing a date
const myCreatedDate = new Date(2023, 8, 20, 23, 29, 20);
console.log(myCreatedDate.toLocaleString()); // 23rd Jan 2023

const cDate = new Date("01-01-2023")
console.log(cDate.toLocaleDateString())

//Time Stamp
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myTimeStamp.toLocaleString());
// console.log(myCreatedDate)
// console.log(myCreatedDate.getTime())
//Note: Date needed to be compared in MiliSecond (As a profesional developer)
console.log(Date.now());
console.log(Date.now()/1000); //Decimal Value
//To make it more readable
console.log(Math.floor(Date.now()/1000)); //As decimal is taken out so this value is more readable 

// let myTimeStampOne = new Date.now(); //constructor type but Date.no() is not a constructor
// console.log(myTimeStampOne);


//Get seperate data
let dateMy = new Date()
console.log(dateMy);
console.log(dateMy.getDate())
console.log(dateMy.getDay());
console.log(dateMy.getFullYear());
console.log(dateMy.getHours());
console.log(dateMy.getMilliseconds());
console.log(dateMy.getMinutes());
console.log(dateMy.getMonth()); //Now month is september = 9. On console we're getting it as a 8 (Reason months starts from 0 = January, 1 = february and so on)
console.log(dateMy.getSeconds());
console.log(dateMy.getTimezoneOffset());

//Demo way which proffesional used  to print date which is string interpolation.
console.log(`Todays date & time is ${dateMy.getDate(), dateMy.getTime()}.Thanks for providing date & time)`);
//Internal methods of date in Locale string Method
console.log(dateMy.toLocaleString('default',{
     weekday: "long",
     era: "long",
     formatMatcher: "best fit", 
     timeZoneName: "long",
     calendar: "all"

}));