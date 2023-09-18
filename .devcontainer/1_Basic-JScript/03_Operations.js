//Operation is a part of operations 
let string1 = "Sanchit"
let string2 = " Deshmukh"
let string3 = string1 + string2 //It a one way to concatenate 
console.log(string3);


let string11 = "Sanchit"
let string21 = "Deshmukh"
let string31 = string11 +" "+ string21 //this is the another way to represent
console.log(string31);

//____________________________________
//Concatenate represented by "+" symbol.
//concatenate is used for the purpose of joining the string's together as given below in example
// console.log(1 + "2");  //simple it will get concatenate
// console.log("1" + 2); //It will get concatenate
// console.log(1 + 2 + "3"); //conacatenate
// console.log(1 + 2 * 3 + 4 / 5); //It's a funky way to reperesnt code infront of client. So, don't write like this
//If it is for practice or teaching purpose then its alright go ahead and do it.
// console.log((1+2)*(3*4)+(5/6)); //For practice purpose we can use parathesis
// console.log(+true); //as true=1 that means it will print 1 but not a proper way to write a code 
// console.log(+" ") //will print 0



//Exponential findings
//Postfix and Prefix 
/*
x++ operator is overloaded for two operands
number and BigInt
e.g- Assigned value = 11 
     Test: BigInt or num operand
     If BigInt --> BigInt
        num --> num
    If it is not BigInt then it performs num
    If BigInt not = 
    then num = (Number Increment will happen)
*/
// a++, ++a
let a = 3;
const b = a++; //When "++a" operator is applied before an alphabet. Then, it will increment the assign value with +1 and constant value will remain as given
console.log(`a:${a}, b:${b}`);


let x = 4;
const y = ++x; //When "++a"  operator is applied after the alphabet . Then, it will increment the assign value with +1 and both of them will becomes equal to each other e.g- a=b
//given value = constant value
console.log(`x:${x}, y:${y}`);  

/*

operand 
If Postfix - then firstly it returns value then perform increment operation
x++  --> It returns value and then performs increment

If Prefix - It first increments then return a value
++x --> It performs increment and then returns a value

++(++x) -> Increment can be applied to operands only
           e.g- ++x or x++ (Operands can be any references, object and variables these are valid assignment targets)
           not allowed on ++(++x), ++{}, ()++.
*/

let z = 100
z++   //Prefix  first increment & then gives a value
console.log(z)

const game = 100 //constant/fixed can't be changed
game++
//console.log(game);  //will throws a typeError

let gameChanger = 100
++gameChanger  //Postfix - first give a value &  then performs an increment
console.log(gameChanger); //It will increment a value
