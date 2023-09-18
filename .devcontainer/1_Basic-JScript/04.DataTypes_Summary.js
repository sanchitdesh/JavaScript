/*
Data types:
Categorize in two parts
1. Primitive
2. Non-Primitive/Referenced data type

Note: Difference like How the data is stored in memory and how we can access that data?. On this basis their
categorization happens


Note: Just casual point: Call by Reference or Call by Value (example of primitive and non-Primitive)

Note: Primitive (Call by Value): Reason as they called by value e.g- string s = "Sanchit";
In the mentioned example states that it is a string and it was represented by "". Hence it is called as call by value

1. Primitive (Call by Value) - As we copy the code and paste it and make changes to it. That data will get 
changed in Copy file not the original one.

String
Number
boolean
null - Empty.
undefined
Symbol - To make the value unique e.g- If we want to create Buttons but unique on frontend. So, we wrap that to symbol then it is called as button 
BigInt - It stores a big/huge number

2. Non-Primitive/Non-Primitive/(Call by reference)\
Arrays
Objects
Functions


Examples:
const name = "Sanchit" -> string
const score = 200 --> Number
const score = 3222.2 -->
const score = true  --->Boolean
const score = null --> () - empty
const score = undefined / let score; -> Two ways to write undefined
const bigNumber = 2356746463535345353433222n --> BigInt -In JS if there is a huge value then Javascripts automatically uses the BigInt data type
If we apply 'n' after number it will automatically becomes BigInt
#####Symbol#####
As it is a unique
_____________
const id = symbol('123')
const anotherTd = symbol('123')
console.log(id === anotherID)  
console.log(typeOf id)
console.log(typeOf anotherId) 
Exmaple: If we are using 2 buttons nut in both of the data is same and typeName is different. So, it will say as false


2. Non-Primitive Data types:

Array:
const score = ["Dhoni", "Raina", "Jadeja", "Virat"];

Object: (What data is given inside the {ABC} currely braces it is called as object)
let pDetails = {
    name = "Sanchit",
    age = 25,
}
console.log(typeOf pDetails); // Object

Functions:
const isFunction = function(){
    console.log("Hello World");
    console.log(typeOf isFunction); //It will return as a data type as a function. In JS it is called as Object Function
};


to know which data type it is  we can use typeOf() method:
console.log(typeOf score);
Note: Null data type is "Object".
      Normal examples will print it as an undefined

      //ECMA - Type of operator and their assigned values



      In Simple language all the non-primitive data types are called as functions.
      Array, Object, Functions = Function Data types
      */