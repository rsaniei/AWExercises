// Data types exercise -
// This function that receives 2 parameters: a string, representing a property name, and an object.
//  * If an object doesn't have a property with such name yet (or it's value is undefined),
// property with such name should be added, with the value set to true.
// If an object already has a property with such name, property should be removed.
// The function returns modified object.

// function toggleProperty(propertyName, object){
//   if (object[propertyName]=== undefined){
//     object[propertyName] = true;
//   } else{
//     delete object[propertyName];
//   }
//   return object;
// };

// const newObject = toggleProperty('valid', { required: true });
// console.log(newObject);

// const newObject = toggleProperty('valid', { required: true, valid: false });
// console.log(newObject);


// Exercise 3
function getObjectFromStrings(...args) {    //creates an "args" array = ["one", "two", "three"]
    let myObject = {};
    let index = 0;
    for(let i of args) {
      console.log("item", i);
      index++;
      myObject[i] = index;                //myObject { one: 1, two: 2, etc...}
      console.log(myObject[i]);
    }
    return myObject;

};
  // const newObject = getObjectFromStrings('apples', 'bananas', 'oranges');
  // const newObject = getObjectFromStrings(['apples', 'bananas', 'oranges']);

  // console.log(newObject);

  // function sum(a, b, c){
  //   return a + b + c;
  // }
  // // const numbers = [1,2,3]
  // // console.log(sum(1,2,3));

  function getNumberOfPropertiesOrSumOfValues(object){
    const propertiesNumber = Object.keys(object).length;
    const valuesArray = Object.values(object);
    let valueSum = 0;

    for(i = 0; i < valuesArray.length; i++){
      if(typeof valuesArray[i] === 'number'){

        valueSum += valuesArray[i];
      }
      else{
        console.warn('Please provide an object cantaining integers!')
        return
      }
    }
    return Math.max(propertiesNumber, valueSum);
  }
const result = getNumberOfPropertiesOrSumOfValues({ apples: 2, bananas: 3 });
console.log(result);

function returnType(params) {
  if (params instanceof Array)
    return "array";
  return typeof params;

}
console.log(returnType("hello"));
