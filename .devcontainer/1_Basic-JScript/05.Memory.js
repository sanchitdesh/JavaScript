/*Memory & threads:


Points to discuss: 1. How memory works in JS?
                   
History: In early programming languages like C language. Where by ourself need to reserved or clear a memory.
         In modern languages like javascript and other languages. Where memory is not under our control. Automatic 
         garbage collection will happen.
         
         
         Memory Allocation:
         1. Stack -> Primitive (For all primitive data types, stack memory is used)
         2. Heap ->  Non-Primitive (For all non-primitive data types, Heap Memory is used)

         1.Stack (Primitive):
            a. Whenever stack memory is used, the variable which we declared there. We will get
               a copy of that original value.
                e.g- Original Value = Copy
        2. Heap (Non-Primitive):
            a. Whenever Heap memory is used, the variable/object which we declared there. We will get 
               a reference of that original value. 
                e.g- Original Value = Reference
*/  

//yName -> zName
//________________________________________________________________________________________
// 1. Stack (Primitive)


let yName = "Sanchit"
let zName = yName
zName = "Deshmukh"
console.log(yName)//the value will not get copy. 
                  //Name will get copy to next.
console.log(zName)   


/*
A = a   - value is assigned first
B = A   - name will get call (B = A)
B = b   - value is assigned to B
C = B   - Name is assigned
C = c   - value is assigned

Process:
Name
value
Name
Value

*/
//____________________________________________________________________________________

//2. Heap(Non-Primitive)

/*
Whule writing an object in curley braces always used ":"

*/

let userName = {
   email: "sanchit@google.com",
   upiID : "sanchit@ybl"
}

let empName = userName
userName.email
userName.upiID

console.log(userName.email);
console.log(empName.email);
console.log(userName.upiID);  //Previous and current will print the same data. I mean current will access the previous data and gives the same o/p as per previous one.
console.log(empName.upiID);
//This is how we can get the reference of previous data in current.

