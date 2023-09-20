/*String concatenation:

let fName = "Sanchit"
let lName = " Deshmukh"
console.log("My name is "+ fName + lName); //My name is Sanchit Deshmukh

Note: But this is not a best practice. (Do not prefer this way anymore)

Modern technology:
1. Try to use back ticks `` because it has string interpolation.
2. It is one type of placeholder where we can inject the data directly
*/

const  firstName = "Sanchit"
const lastName = "Deshmukh"
console.log(`My first name is ${firstName} and my last name is ${lastName}`); //Always prefered this way to print a string
//It is called as interpolation
console.log(`My first name is ${firstName.toUpperCase()} and last name is ${lastName.toUpperCase()}. So, firstName + lastName = "SANCHIT DESHMUKH"`);
console.log(`My first name is ${firstName.toLowerCase()} and last name is ${lastName.toLowerCase()}. So, firstName + lastName = "Sanchit Deshmukh"`);
console.log(`My first name is ${firstName.toLocaleUpperCase()} and last name is ${lastName.toLocaleUpperCase()}. So, firstName + lastName = "Sanchit Deshmukh"`);




//Below topic code is here:
const fName = new String("Sanchit")
console.log(fName[0]); //To know the position of letters of data 
console.log(fName.__proto__); //print: {} to access {} of this go to browser and inspect under console we will get this.
console.log(fName.charAt(3));
console.log(fName.indexOf('c'));
console.log(fName.length)   //length is not function e.g - Functions are charAt();
//Where round bracket() is used at end of keyword that is a function


//Seperate example with Substring method/Slice Method
const myName = "Sanchit"
let subStringConvert = myName.substring(0, 4);
console.log(subStringConvert); //String to SubString conversion


/*
Another way to declair a string
const fName = new string("Sanchit") //This is how we can do to declair a string

Intresting to know all methods which are used in JavaScript.
Notes: All methods of string.
Fname which we have on console with positions.
const fName = new String("Sanchit")
undefined
fName
String {'Sanchit'}
0                     //This is Key value Pair.
:                     //Where 0 is Key S is Value and combination is Key Value Pair
"S"                   // 0 = Key & S = value
1
: 
"a"
2
: 
"n"
3
: 
"c"
4
: 
"h"
5
: 
"i"
6
: 
"t"
length
: 
7
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Sanchit"
*/
//Seperate code for slice method.
const pName = "Sanchit"
const reverseValue = pName.slice(-6, 4);
console.log(reverseValue);  //It have the ability of reversing the string on console by using slice() method.,

//trim Method
const t = "   Sanchit   "
console.log(t);
console.log(t.trim());   //will trim all the spaces from Start as well as end also.
console.log(t.trimEnd()); //will trim ending space
console.log(t.trimStart());  //Will trim starting space 

//replace method example
/*
If there is URL inside that if we gave space.Then Browser will consider it as %20 automatically.
e.g https://www.kohler.com/partner-community page -> (URL with space)
Browser covert space into %20 -> https://www.kohler.com/partner-community%20page
*/
const urlDesign = "https://www.kohler.com/partner-community%20page"
console.log(urlDesign.replace("%20","-")); //We replaced %20 by - using replace method
console.log(urlDesign.includes('kohler')); //True (will find that word is available or not)
console.log(urlDesign.includes('Sanchit')); //false

//Coversion of String to array: Using Split Method
const pDeveloper = "My-name-is-Sanchit-Deshmukh"
console.log(pDeveloper.split('-')); //[ 'My', 'name', 'is', 'Sanchit', 'Deshmukh' ]

const pDev = "My name is Sanchit Deshmukh"
console.log(pDev.split('-')); //[ 'My name is Sanchit Deshmukh' ]
console.log(pDev.bold()); //<b>My name is Sanchit Deshmukh</b>
console.log(pDev.blink()); //<blink>My name is Sanchit Deshmukh</blink>


//Need to use only back ticks (Mandatory)
let fSentence = "Started"
let lSentence = "life"
console.log(`Sanchit Deshmukh have ${fSentence} a new ${lSentence}`);