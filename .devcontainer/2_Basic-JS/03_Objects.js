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
const mySym = Symbol("Key1")
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
    Experience: 4,
    email: "sanchit@google.com",
    mySym: "MyKey",
    [mySym]: "MyKey!",
    "full name": "Sanchit Deshmukh" //For demo/learning purpose (If we fetch it using . then it won't be coming. So, fetch we need to used an array)
} //1st way  (Literals) 

//Curely braces is actually an Object currently it is an empty object.
//We can define the both key or value. By default that key becomes a String
//The value can be Object, Boolean, Number, String, Character etc.
console.log(JSUser.firstName); //1st Way to fetch the value
console.log(JSUser["firstName"]); // (2nd way) As we know the type becomes String by default. So, in array we are 
//trying to fetch a data then we have give the typename as String
console.log(JSUser[mySym]); //This is the proper syntax to declare a value
console.log(JSUser.mySym); //Not a proper syntax to declare 
console.log(JSUser["full name"]); //using . we can't access the value of full name. For that Array needed to be bring into the picture

//____________________________________________
//We can override the value or change the value
JSUser.email = "Sanchit@gmail.com" //Now the value is changed of an email
console.log(JSUser.email); //These two are the two ways to declare an array
console.log(JSUser["email"]); // Need to give it as a String in an array

//_______________________________________________
//Scenarion is: CLient dont want anyone to change the data.So for that we have freeze() method
//Object.freeze(JSUser) //So this freeze method we not allow us to change the data
JSUser.email = "sanchit@blackbox.com"
// console.log(JSUser["email"]);
console.log(JSUser);


//__________________________________________________________
//Functions: It can be treated as Variables 
JSUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JSUser.greeting); //undefined //function Anonymous
//If we make greeting as function means greeting()
//console.log(JSUser.greeting()); //Will throw an error as "greeting is not a function"  (During it is freezed)
console.log(JSUser.greeting()); // Will give the output as "Hello JS User"
//To make it print. we need to make it unfreezed


//Second function call
//this keyword is used to call the data from other class or other 
JSUser.greetingOne = function(){
    console.log(`JS User name is ${this.firstName} ${this.lastName}`);
}
console.log(JSUser.greetingOne); //undefined (This might be because either browser or Code executor software will run the atleast once)
console.log(JSUser.greetingOne());
//____________________________________________________________________________________

