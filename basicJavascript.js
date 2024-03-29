/*************************** 
*    Variables and Data types 
*/

// variables must start with alphabets or with '$' or '_'
// variables does not contain special charcters other than '$' or '_'

console.log("hello js!!!");

var firstName = "chandan";
console.log(firstName);

var lastName = "Kumar";
console.log(lastName);

var age = 23;
console.log(age);

var job
console.log(job)

job = 'teacher'
console.log(job)


/*************************** 
*    Variable mutation and type coercion
*/

var name = 'john';
var age = 28;

// Type coercion
console.log(name + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(name + ' ' + ' is a ' + age + ' yrar old ' + job + '. Is he married? '+ isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(name + ' ' + ' is a ' + age + ' yrar old ' + job + '. Is he married? '+ isMarried);

var lName = prompt("Whats his last name?");
console.log(name + ' ' + lName);


/*************************** 
*    Js operators
*/

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "hey! js");
var x;
console.log(typeof x);


/*************************** 
*    Js operators
*/


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Groupig
var ageJohn = now - yearJohn;
var ageMark = 35;
var avg = (ageJohn + ageMark) / 2;
console.log(avg);

// Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6;
// associativity of '=' is from right-to-left so x and y are initialised with same value

console.log(x, y);

// more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

/*****************************************************************************************
*    truthy and falsy values ans equality operators '==' '==='
*/

//   Falsy values: undefined, 0, null, '', NaN
//   Truthy values: not falsy

var height;

if(height){
    console.log('the variable is defined!!!');
}
else{
    console.log('the variable is not defined!!!');
}

height = 0;     //defined variable
if(height || height === 0){
    console.log('the variable is defined!!!');
}
else{
    console.log('the variable is not defined!!!');
}

// quality operator
// '==' does a type coercion
// '===' is a strict equality check
height = 23;

if(height == '23'){
    console.log("the '==' does a type coercion!!!");
}


