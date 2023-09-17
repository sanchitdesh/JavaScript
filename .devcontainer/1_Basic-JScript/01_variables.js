/*
Employee = Salary + Account No (Storage/memory) + Account PWD + EmpEmail + accountSummary
Prefer not to use variable in JavaScript languages 
because the problem in block scope and functional scope
variables: Which store the data in itself
Const
Let
Var
*/

const empAccountNo = 1234567
let salaryAmmount = "32000"
empEmail = "sanchit@gmail.com"
empAccountPWD = "Sanchit"
accountSummary = 500000
let empcity; //without value it will give as an undefined state on console
let empState;
let empCountry = "India"

salaryAmmount = "70000"
accountSummary = 570000
empEmail = "sanchit@google.com"
empAccountPWD = "Sanchya"
empcity = "Akola"
empState = "Maharashtra"
//empCountry = "India" 
console.log("You Account ID is: " +empAccountNo)
console.log("Current Account Summary " +accountSummary)
/*
console.log() - this print statement will consume so much timing. So JS have introduced table method
console.table() - which will print the table with all the latest information
*/
console.table([salaryAmmount, accountSummary, empEmail, empAccountNo, empAccountPWD, empcity, empState, empCountry])
/*
let empState; - It will still print but states it as a undefined state
; - used is not compulsory
empName = "Sanchit" - This is not a proper way to writing code. But, yes this is also the one way that you can write to declair the statement
let empName ="Sanchit" - this is the proper coding way also prefered to use variable infront of typename

*/