/*
Examples:
Shopping cart
(...ABC) == Spread/Rest Operator
*/

//1.
//By using Spread/Rest Operator
function calculateCartQuantity(...quantity){
return `${quantity} is your quantity in your cart...!` //o/p without an array
// return quantity //o/p will be in array
}
console.log(calculateCartQuantity(11, 23, 45, 23));

//--------------------------------------------------------------

//2.
function calculatePrice(val1, val2,...customers){
    return customers
}
console.log(calculatePrice(10, 20, 30, 40, 50));
//Val1 = 10, val2 = 20, 
//customers = 30,40, 50
//return is calling to the customers. Customers will get returned as [30, 40, 50]

//------------------------------------------------------------

//2.

const user = {
id:1,
name:"Sanchit"
}
function calculateProducts(id, name){
    return user
}
console.log(calculateProducts(user));


//3.

const userOne = {
    id:1,
    name:"Sanchit"
    }
    function calculateProductsOne(anyObject){
        
        console.log(`Users id is ${anyObject.id} & name is ${anyObject.name}`);
    }
    calculateProductsOne(userOne)



    //4.
    const userTwo = {
        
        }
        function calculateProductsTwo(anyObjectOne){
            console.log(`Now, id is ${anyObjectOne.id} & name is ${anyObjectOne.name}`);
        }
        calculateProductsTwo({
            id: 7,
            name: "Deshmukh Sanchit"
        })