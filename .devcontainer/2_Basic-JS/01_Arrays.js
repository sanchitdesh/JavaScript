//array
// console.log("Let's Starts with an Array...!");
/*
() = Paranthesis
[] = square brackets (Array)
{} = braces/Curly braces

Array: 
const a = [1, 2, 3, 4] 
Where [] = Symbol of an array
1, 2, 3 = elements (i.e- Elements can be number, String, mixed etc)
Array: It is an object. One data type where we can put multiple elements/items in one object/variable 
JS - Array can be resizable/modified. It can be mixed data as well.
Indexing starts with zero (0)
example:
const a = [0,1,2,3]
console.log(a["Zero"]) //It is not allowed to be used because it is an arbitary string
console.log(a["0"])  //Not allowed
console.log(a[0]) //allowed

there are two copies: 
Shallow copies: which means if we change the copy of an array it will change the original array as well (Stack)
Deep copies: It doesnot share the original reference
__________________________________________________________
#Ways to declare an array:
1. const arr = [1, 2, 3, 4]
2. const arr = ["Shaktiman", "IronMan", "ChaiAurCode"]
3. const arr = new Array()//Here not the [] but () this is used. It automatically turn () --> []

____________________________________________________________
#Ways to access proactive methods of an array follow console on browser (Inspect)
______________________________________________________________________________

*/

//Demo:
// const arr = [0,1,2,3,4,5]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[5])

// const arr = ["Zero", "One", "Two", "Three", "Four", "Five"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[5])

// const myArr1 = new Array(0,1,2,3,4,5)
// console.log(myArr1[0]);
// console.log(myArr1[1])
// console.log(myArr1[2])
// console.log(myArr1[3])
// console.log(myArr1[5])


//______________________________________________________________________________

/*Array Methods:
1. Push: Will add the elements
2. Pop: Will remove the last element from an array
3. Unshift(): whatever the values will be given in method that will get added at the start of an array
   e.g unshift(0) //0 will be added at the very start of an array
4. Shift(): It will remove an element which was added via unshift() method (No need to provide a value)
5. Includes(): It will answer to our questions in boolean value true or false (Questions are related to array)
6. Join(): It will join the typenames and give the output in string format. 
7. Slice():
8. Splice():

*/

let myArr = [0, 1, 2, 3]
myArr.push(4) //It will push 4 to the array
myArr.push(5) //It will push 5 to the array
myArr.pop() //last element will be removed from an array (5 was last element and it was removed from an array)
//myArr.unshift(1) //It will add an element at the start of an array
//myArr.shift() //It will remove an added element at the start of an array via unshift() method.
//Without unshift() method also, shift() method will remove the starting elemenet of an array
//console.log(myArr.includes(9)) //Will give me answer as false (Because in an array 9 doesn't exist)
console.log(myArr.includes(1)); //will give as true (bcoz 1 exist in an array)
console.log(myArr.indexOf(1)) //It will give me the index of 1
console.log(myArr); //It will print the remained value with respective to a method
//_____________________________________________________________________________________
//Join Method
const newArr = myArr.join() //this method have joint the 2 typenames
console.log(newArr); //It will remove array symbol
console.log(myArr); //It will print the main output
console.log(typeof newArr); //It will give type name (Bind and converted to string)
//________________________________________________________________________________________
//slice splice
console.log("A ", myArr)
const nArr = myArr.slice(1,3)
console.log(nArr) //ignores last value given in range and other before value get printed
console.log("B ", myArr);
// const nArr2 = myArr.splice(1, 3)
// console.log(nArr2) //Gives full value
const nArr3 = myArr.splice(1, 3)
console.log(nArr3); //It will print all 3 values 
console.log("C ", myArr); //It will ignore those 3 values which were printed in earlier method.
//So, this C will print remaining numbers after displaying of previous method (It will display as (0,4))
//We're comparing original array in all steps of slice and Splice via (A, B, C)
//From C the Slice portion went out and the remaining portion we captured.
//___________________________________________________________________________________________________

