/*
Objects & Events
Objects: It can be declared using literals or contructors
//Note:
Two ways to declare an Object
Singleton : When we declared am object using constructor() that is Singleton Object
If we declared an Object using literals then it doesn't Singleton actually it creates multiple instance
*/

//Object literals:
//declaring an Object
// Object.create //2nd Way (Constructor)
//Using Literals Declaration of an Object
const JSUser = {
    firstName: "Sanchit",
    lastName: "Deshmukh",
    age: 26,
    DOB: 15/6/1998,
    City:"Akola",
    State: "Maharashtra",
    Country: "India",
    ZipCode: 444001,
    Designation: "Developer",
    Experience: 4
} //1st way  (Literals) 
//Curely braces is actually an Object currently it is an empty object.
//We can define the both key or value. By default that key becomes a String
//The value can be Object, Boolean, Number, String, Character etc.
console.log(JSUser.firstName());