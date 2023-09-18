//Note: On very high note. Code always have few things:
// Rediability, clean & tidy.
//avoid cons=fusions & Difficulties & traffic also
// console.log(2>3);
// console.log(3<6);
// console.log(3 != 4);
// console.log(4 >= 4);
// console.log(2 == 2);
// console.log( 2 == 5);

//______________________________________________________
/*
== is treated as equality
>, <, ==, >=, <=, != all these are treated as they performed different operations
hence, null is considered as number which is zero "0"
*/

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true because of above reason null is treated as a number "0"



console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false  treated as undefined. Which means not value is defined  either manually or by default

//Note: The conversion like null or undefined will leads to a serious confusion.
/*
(===) Strict check - It simply means it checks the value but very strictly with its datatype
note: It checks whether is there any difference between data types. 
*/
console.log("=== starts here");
console.log("___________________________________________________-");
//console.log("1"  == 1) // == will just check whether the number.
console.log("1" === 1);// (will print as false because data types are different) ==== checks very strictly whether the number are same or different or either its data type is same or different
console.log("1" === "1"); // True Beacuse data types are same as well as number also


//_______________________________________







