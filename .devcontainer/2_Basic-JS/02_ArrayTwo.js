/*
#Ways to print one array elements into the another array:


*/
const Indian_Heros = ["Shaktiman", "Junior-G", "SonPari"]
const marvel_Heros = ["Thor", "Hulk", "IronMan"]

// console.log(Indian_Heros);
// console.log(marvel_Heros);
// console.log("Lets combine both of the arrays");
//_____________________________________________________________________
//Combine of both arrays
// Indian_Heros.push(marvel_Heros)
// console.log(Indian_Heros)   //Not a proper way to declare a value
// console.log(Indian_Heros[3]) //To access the element from there index position
// console.log(Indian_Heros[3][1]) //to access the element from there index postion with the access of subindex element of of main index
//______________________________________________________________________

//Another way Concat method
// Indian_Heros.concat(marvel_Heros) //This way will not work. So, we're declaring a new value to concat the data
// const newIndiaHeros = Indian_Heros.concat(marvel_Heros)
// console.log(newIndiaHeros) //Arrays are successfully concatenated

//________________________________________________________________________________

//Another way: (Spread method) - e,g- Glass is broken into multiple pieces
//Declare a new typename in the value to be declared
// const newHeros_India = [...marvel_Heros,...Indian_Heros]
// console.log(newHeros_India);
//______________________________________________________________________________

//Another way to solve the complex array structure
// const another_Arr = [1,2,3,4,[5,6,7],8,9,10,[11,12,13,[14,15]]]
// const newAnotherArr = another_Arr.flat(Infinity) //Using infinity 
// const newAnotherArr1 = another_Arr.flat(4) //By assigning value
// console.log(newAnotherArr1);
// console.log(newAnotherArr);

//___________________________________________________________________________________
//To know is the given condition is array or not 
// console.log(Array.isArray(["Sanchit"])); //True (String)
// console.log(Array.isArray("Sanchit")); //False
// console.log(Array.isArray([1, 2, 3])); //True   (Number)
// console.log(Array.isArray(1,2,3)); //False
// //________________________________________________________________________________________

//To convert simple condition into array (Mostly used in scraping)
// console.log(Array.from("Sanchit Deshmukh"));
// console.log(Array.from({name: "Sanchit"})); //Will give an empty array
 
//_________________________________________________________________________________________

// let score1=100
// let score2=200
// let score3 = 300
// console.log(Array.of(score1,score2,score3)) //We can print declared value in an array using "of" method
// //i.e "OF" and "From" method are somewhat similar

//_______________________________________________________________

//Note: Do study & analysis on of, from, isArray






