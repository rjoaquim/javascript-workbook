'use strict'

const partnerObj = {
  firstName:"Ricardo",
  lastName:"Oliveira",
  age:26,
  eyeColor:"brown",
  talk:() => {
    return "Hello Renee!";
  },
};
partnerObj.lastName = "cars";

/*console.log(partnerObj.firstName);
console.log(partnerObj.lastName);
console.log(partnerObj.talk());*/

const partnerArr = Object.keys(partnerObj);

//console.log(partnerArr);

//Loop over an array
/*partnerArr.forEach(function(item, index, array) {
  console.log(item);
});*/

for (const i in partnerArr){
console.log(partnerArr[i])
console.log(partnerObj[partnerArr[i]])
}