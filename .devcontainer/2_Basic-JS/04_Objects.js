/*
First video of object that was using Literals
Objects:
We will going to learn how to declair Object using literals & Constructors
In this video we're gonna see how we can declare Object using Singleton or Constructor (Both are same)
*/
//Demo Example (To create using constructor)
// const DatingApp = new Object() //1st way
// console.log(DatingApp);
//const tinderApp = {} //2nd Way
//Want to give value to the user (Who is already registered in Database)
const tinderApp = {}
tinderApp.id = "ABC123"
tinderApp.name = "Sanchit"
tinderApp.isLoggedIn = true
//console.log(tinderApp);  //Whatever the data is given that will be printed

//Lets take another way where we are using nested 
const myUser = {
    id: 123,
    email: "sanchit@ me.com",
    fullName: {
        userFullName:{
            firstName: "Sanchit",
            middleName: "yashavantrao",
            lastName: "Deshmukh"
        }
    }    
}
console.log(myUser.id);
console.log(myUser.email);
console.log(myUser.fullName);
console.log(myUser.fullName.userFullName);
console.log(myUser.fullName.userFullName.firstName);
console.log(myUser.fullName.userFullName.middleName);
console.log(myUser.fullName.userFullName.lastName);
// console.log(myUser.email.id); //Not a proper way to get the data (Undefined)
 
//______________________________________________________________________
/*
Just for knowledge purpose
? = it is act as a OR either this or this to be used
*/
const target = {1: "a", 2: "b"}
const source = {3: "c", 4: "d"}
//const obj3 = {target, source} // It will print a data in a seperate array
const obj4 = Object.assign(target, source)
const obj5 = Object.assign({},target, source) //{} is an optional Parameter (But this way will merge both of the obj1 and obj2)
// //console.log(obj3) 
// console.log(obj4); //Will give a proper o/p (expected)
// console.log(obj5); //Same o/p will comes up as given above
//returned target method
// const obj1 = {1: "A", 2: "B"}
// const obj2 = {3: "C", 4: "D"}
// const objResult = Object.assign(obj1, obj2)
// console.log("o/p is:", objResult)
// console.log("o/p of obj2 is:",obj2)
// console.log("Result of objResult & obj2 are true or false:", objResult === obj2);
//Example:
const a = {1: "Apple", 2: "Ball"}
const b = {2: "Bell", 4: "Cat"} 
// const c = Object.assign({},a,b) 
const c = Object.assign(a, b) //It will force to give the value as true (Because the space was not captured by "{}")
//"{}" = Is required during the merging of cells, or an array
console.log(a);
console.log(c === a); //false Because of "{}" which have a occupied the space

//Example:
// const s = {a: 1, b:2}
// const t = {b:4, c:5}
// const f = Object.assign(t,s) //If we apply '{}' it will occupy the space
// console.log(t)
// console.log(f === t);


//_______________________________________________________________
//Difference between Source and target. Source goes into target
//e.g- Target<---Source

const aData = {1: "a", 2:"b"}
const bData = {3:"c", 4:"d"}
const cData = {5: "e", 6:"f"}
// const storeData = Object.assign(aData, bData, cData)
// const storeData1 = Object.assign({},aData, bData, cData)
// console.log(storeData);
// console.log(storeData1);  
  //{} is target 
  //a,b,c are source
  //These sources are flowing to the target
//   console.login(Object.assign({},a,b,c))

//________________________________________________________
//We can used spread method in Object (Constructor)
const dDataTarget = {...aData,...bData,...cData}  //using spread method
console.log(dDataTarget);

//_______________________________________________
//database value:
//Database gives the array in array
const newUsers =[
    {
        id: 1234,
        name: "SanchitD "
    },
    {

    },
]
newUsers[0].id;
newUsers[1].name;
console.log(tinderApp) //Value from old database
console.log(Object.keys(tinderApp)); //Keys from the database
console.log(Object.values(tinderApp)); //Values from the database
console.log(Object.entries(tinderApp));//Will give us the array in array with values seperated
console.log(tinderApp.hasOwnProperty('name'));//to know is there that XYZ property exists or not 
//hasOwnProperty()=This method tells us that whether this property exist or not
console.log(tinderApp.hasOwnProperty('username'));//(False) this property doesn't exist. So, it will give a boolean value

//_______________________________________________________________________________
//Destructuring of an object:
//Declaring a course value
const course ={
    courseName: "JS in Hindi",
    courseFees: 999,
    courseInstructor: "Hitesh Sir"
}

//accessing the value
console.log(course.courseName);
//If we want to access every value. then for that again and again that console.log() needed to be return. To make it simple using
//const {courseInstructor} = course  //we can add other values as well using comma (,)
const {courseName, courseFees,courseInstructor} = course
console.log(courseInstructor);
console.log(courseName,courseFees);
// console.log(courseName,", "+ courseFees); //if want to give the space between two value we can use this
console.log(course); //will automatically print all the values
// console.log(course.courseInstructor) //will print the value

//________________________________________
//Now how to destructure a key

// const{name: n} = tinderApp //destructuring the name (name: n)
// // console.log(name) //will print the value
// console.log(n);  //will print the value

//In a same way we can do wit the other values as well
const{name: n, isLoggedIn: login, id: i} = tinderApp //destructuring the name (name: n)
// console.log(name) //will print the value
console.log(n,login,i);  //will print the value

//______________________________________________
//Example for understanding purpose

// const navbar = (props.company) => {   //
//const navbar = ({company}) =>  = ({ }) - this symbol will tell us about destructuring. e.g:({Company})
// const navbar = ({company}) => {

// }
// navbar(company= "Sanchit")

//_____________________________________________________________