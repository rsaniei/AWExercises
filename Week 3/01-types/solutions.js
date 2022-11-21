
// function selectRandomItem(myArray){

//   let randomElement = myArray[Math.floor(Math.random()* myArray.length)];
//   return randomElement;

// }

// let arr = ['January', 'February', 'March', 'April'];
// console.log(selectRandomItem(arr));

// Copy objects in Javascript
// Using JSON.stringify and JSON.parse

const user = {
  name: "Ana",
  age: 28,
  job: "Web Developer",
  surname : {
    firstSurname : "Gomez",
    secondSurname: "Perez"
  },
  incrementAge: function(){
    this.age++;
  }
};
let clonedUser = JSON.parse(JSON.stringify(user));

clonedUser.age = 32;
clonedUser.surname.secondSurname = "Doncel";

console.log(user);
console.log(clonedUser);
