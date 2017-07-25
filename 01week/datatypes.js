/*Write a JavaScript program to display the current day and time.*/

let showDateTime = () => {
    return Date();
}
showDateTime();

/*Write a JavaScript program to convert a number to a string.*/
let numToString = (param1) => {
    const param1 = param1.toString;
    retun `The numner ${param1} is now converted to ${typeof(param1)}`
}
numToString(6);

/*Write a JavaScript program to convert a string to the number.*/
let stringToNum = (param1) => {
    const param1 = Number(param1);
    retun `The string "${param1}" is now converted to ${typeof(param1)}`
}
stringToNum('4');

/*Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String*/

let showDataType = (param1) => {
    retun `The string "${param1}" is type of ${typeof(param1)}`
}
showDataType('test');

/*Write a JavaScript program that adds 2 numbers together.*/
let addNumbers = (param1,param2) => {
    retun (param1 + param2);
}
addNumbers(3456,6543);

/*Write a JavaScript program that runs only when 2 things are true.*/
let trueCheck = (param1, param2) => {
 if (param1 === true) && (param2 === true){
     return `run this program, both parameters are TRUE`
 }else {return `both parameters are not equal to true, program not ran`}
}
trueCheck(1,1);

/*Write a JavaScript program that runs when 1 of 2 things are true.*/
let trueCheckOne = (param1, param2) => {
 if (param1 === true) || (param2 === true){
     return `run this program, one of the two parameters are TRUE`
 }else {return `both parameters are not equal to true, program not ran`}
}
trueCheckOne(0,-1);

/*Write a JavaScript program that runs when both things are not true.*/
let falseCheck = (param1, param2) => {
 if (param1 === false) && (param2 === false){
     return `run this program, both parameters are FALSE`
 }else {return `both parameters are not equal to false, program not ran`}
}
falseCheck(0,0);