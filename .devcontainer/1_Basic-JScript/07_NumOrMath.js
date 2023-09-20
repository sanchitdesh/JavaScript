/*
//Numbers (Methods & basic theory)
const score = 300
undefined
score
300
cons
VM165:1 Uncaught ReferenceError: cons is not defined
    at <anonymous>:1:1
console.log(score)
VM245:1 300
undefined
const scr = new Number(100)
undefined
scr
Number {100}
console.log(scr)
VM395:1 
Number {100}
[[Prototype]]
: 
Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]
: 
100

*/
//1st way to declare a number
const score = 100
console.log(score);   //Autodetecting data type as Number

//2nd way to declare a number
const scr = new Number(1000)
console.log(scr);  //It showing as that it is a Number data type
console.log(scr.toString());
console.log(typeof scr.toString());
console.log(scr.toString().length); //we can't write: length(); -As it is not a function.
                                    //It is just a parameter: length;

console.log(scr.toFixed(3))  // (1000.000)
                            //the value which we have assigned as a prrcidsion that number of Zero will come infront of decimal
                             //Precision: 1 = .0
                             //Precision: 2 = .00
                             //Precision: 3 = .000    
// const gScore = 11.541 //11.541 = 11.5
// const gScore = 11.541 //11.54 = 12
const gScore = 123.8966 //11.00 = 11 
                     //11.55 = 11.5
console.log(gScore.toPrecision(4)); 

//using Locale string method
const v = 10000000  //By using Locale string method
console.log(v.toLocaleString('en-US')); // (USA) zero's (0) get seperated by commas 
console.log(v.toLocaleString('en-IN')); // India
console.log(v.toLocaleString('en-CA')); //Canada
console.log(v.toLocaleString('en-FR')); //France
//Number Data type: (All Methods)
// Browser console:
// Number. (Enter-All the methods will comes up)
//_____________________________________________________              
/*
//Maths
Note: It was function vs Property 
1. Abs- Absolute methods - It makes negative (-) to Positive (+) 
        (-) to (+)
        But not (+) to (-)
2. Round- It converts any decimal value to round figure.
          e.g- (4.43) --> 4
               (4.53) --> 5
*/
console.log(Math.abs(4));
console.log(Math.abs(-4));
//______________
console.log(Math.round(4.43)); // o/p: 4
console.log(Math.round(4.53)); // o/p: 5
console.log(Math.round(-4.43)); // o/p: -4
//_______________________
console.log(Math.ceil()); // ceil Method = Ceiling Method (e.g- Top)
                          // Using this method we can control which value to be printed either lower or upper
console.log(Math.ceil(4.111)); //o/p: 5 (top value)
console.log(Math.ceil(4.54));  // o/p: 5 (top value)
//FLoor value = Ground value (Lower)
console.log(Math.floor(4.2));  // o/p: 4 (Lower value/floor value)
console.log(Math.floor(4.6)); // o/p: 4 (Lower value)
//Square root method:
console.log(Math.sqrt(144)); // o/p: 12 (Print the Sqrt)
//Max
console.log(Math.max(3,4,8,9,12,34)); // o/p: 34
//Min
console.log(Math.min(1,4,6,9,2,0.5)); // o/p: 0.5
//Imp Method: Random Method
console.log(Math.random()); // On console it will print the value between 0 to 1
console.log(Math.random()*10); //It will multiply that value by 10
console.log((Math.random()*10)+1); //Now, we are 100% sure that we will not get (0) value.
//Demo example we tried. By using this method we've to make sure that value cannot be zero
const max = 20;
const min = 10;
/*
e.g- Need to findout the value between 10 - 20 
Condition: Less than 10 (Not allowed)
           Value cannot be 0
const min = 10;
const max = 20;
console.log(Math.random());
console.log(Math.random()*(max - min + 1));
console.log(Math.floor(Math.random()*(max - min + 1)));
console.log(Math.ceil(Math.random()*(max - min + 1)) + min);
*/
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //Demo example 
//Study- MDN website for JavaScript.

