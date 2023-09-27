/*
1. Functions: It is nothing but the code which we written that to be store in one package. And the copy of that package
we  can use anywere.
Functions-
Syntax:
function typeName(){

}

typeName() 
______________________
where, 
typeName - Reference
() - Execution
______________________
typeName()-function (The name which was linked with () paranthesis is a Function)

***********************************************************************************
2. Operations using functions:
 a. If we don't give any value & simply executed a program it will print as "NaN" (Not a Number)
 b. typeName(a,b,c)- Where, "a,b,c" is an argument.
 c. At the begining when we declare string or Number that is called as Parameters
   e.g- function myName(Num1, Num2) - Num1, Num2 are parameters.
 d. When we return any value. Then after return nothing will print.
   e.g- const c = A + B
        return c
        console.log(c) //after returning C then nothing will be printed.
  e. If we don't give any value then it will print undefined.
  f. If at the start we gave value, then again we give value through a function. Then old value will be replaced
     by new value.


*/

function myName() {
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
}

myName()
//myName - If we try to print using reference it will o/p as a blank window.
//-------------------------------------------------------------------------------
//Some ways to write the code:
//1.
function addNumber(num1, num2){
  numAdd = num1 + num2
  console.log(numAdd)
}
addNumber(3,4)
// addNumber(3,"4")// 34 - If here next number ("4") is a String, then it will treat first number also as a string.
// addNumber(3,"a")// 3a
// addNumber(3,null)//3 (It will take null as a zero)

//---------------------------------------------------------------
//2.
function add(n1, n2){

let result = n1 + n2
console.log("The result after adding two numbers.")
return result
}
const result = add(3, 4)
console.log("Result is:",result);

//---------------------------------------------------------

//3.
function addNew(a1, a2){
return a1 + a2
}
const resultOne = addNew(3, 4)
console.log("This time result is:",resultOne)

//---------------------------------------------------------------
//4.

function userLoggedIn(UserName){
return `${UserName} You've been successfully logged in...!`
}
console.log(userLoggedIn("Sanchit"));
//Note: If we didn't pass any value to the Parameters then it will gives the result as undefined.
//___________________________________________________________

//5.
function userID(uName){
  if(!uName){
    console.log("Please enter your username");
    return 
  }
return `${uName} has been successfully logged in...!`

}
console.log(userID("Sanchit"));//Sanchit
//console.log(userID());//undefined

//--------------------------------------------------------------

//6.

function userID(uName = "Sanchit"){
  if(!uName){
    console.log("Please enter your username");
    return 
  }
return `${uName} has been successfully logged in...!`

}
console.log(userID("Deshmukh"));//Sanchit will get replaced by deshmukh
//deshmukh overrides Sanchit

//________________________________________________________________________________