//Conversion is such an important topic
//e.g- If  person sends a value from frontend and backend receives that value in a form but it doesn't know which form
//In most of the cases we request a frontend for information then we will get a value as e.g- score then we make it as a const
//__________________________________________________________
//To get the null value in number
let score1 = null;
let retry = Number(score1)
console.log(retry)   //null will return 0 value 
//___________________________________________________________
//Lets try for undefined
let scr = undefined
let ret = Number(scr)
console.log(ret)   //undefined will return 0 value 
//____________________________________________________________
let score = null;
let sName = "Sanchit"
console.log(typeof 777) //One way to know which data type it is.
console.log(typeof score) //second way
console.log(typeof (score)) //third way

//_____________________________________________________________
console.log(typeof "Sanchit") //One way to know which data type it is.
console.log(typeof sName) //second way
console.log(typeof (sName)) //third way
//____________________________________________________________________
//conversion of String to Number
let cName = "SDeshmukh"  //declair a value in string
let valueInNumber = Number(cName)  //applyt Number(typeName)
console.log(typeof valueInNumber) //call that typeName in console 

let valueGetNumber = Number(sName)
console.log(typeof valueGetNumber)
console.log(valueGetNumber)  //It will print a result as "NaN" which is "Not a Number"
//Frontends send the value to the backend in "NaN" is "Not a Number"
//_______________________________________________________________________
//Using Boolean trying to convert into true or false 
let bool = true
//let bool = false  //Here boolean will return true = 1 & false = 0
let checkBool = Number(bool)
console.log(checkBool)
//_________________________________________________________________________

//Number to string
let num = 777
let str = String(777)
console.log(typeof str)  //It Number will get convert  String
//_________________________________________________________________
let isServerDown = true
let resultServer = Number(isServerDown)
console.log(resultServer)       //Boolean will return a value in Number as say true=1 & false=0
//____________________________________________________________________________________________
//let isWebAccessible = 1
//let isWebAccessible = 0  //Result will be false i.e- 0 = false
//let isWebAccessible = ""   //empty string will return a result as false for empty string = false
let isWebAccessible = "Yes it is..." //Value in string will return a result as true i.e- "ABC"=true
let resultWebAccessible = Boolean(isWebAccessible)  
console.log(resultWebAccessible)   //It will return the result in true of false as discussed 1 = true & false = 0
console.log(typeof resultWebAccessible);
/*
Quick notes:
Below will explain conditions with their results
true => 1
false => 0
1 => true
0 => false
" " => false
"ABC" => true
*/
//_____________________________________________________________________________________________
