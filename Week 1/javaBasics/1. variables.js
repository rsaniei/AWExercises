/** 1. How do you think, which of the below variable names are allowed?
 * Which of them are following good practices and which are against them?
 * Discuss in pairs. Confirm in the browser's console which names are not allowed.
 * Then correct all the names that need it.
*/

winner // for a boolean
validateAnswers // for a function validating answers
isValid // for a boolean
getScore // for a function returning a score
function18/ checkEighteen // for a function checking if somebody is over 18 y.o.
validateErrors // for a function validating errors
score // for a variable of type number
getName // for a function returning name
secondName // for a variable containing second name
littlePigs
showBanner // function showing a banner on a page



//SCOPE
// Check the following examples to understan better how scope works

// Initialize a global variable
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);

// -------------------------------------------------



var fullMoon = true;

// Initialize a global variable
let species = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);


// -------------------------------------------------


// Use var to initialize a variable
var species = "human";

if (fullMoon) {
  // Attempt to create a new variable in a block
  var species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);
