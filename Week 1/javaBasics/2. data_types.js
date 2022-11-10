/** 1. How do you think, what is the value of fruits[0]?
 */

const fruits = ['strawberry', 'banana']
fruits.length = 0

fruits[0] // => ???

/** 2. Write a function that receives 2 parameters: a string, representing a property name, and an object.
//  * If an object doesn't have a property with such name yet (or it's value is undefined),
// property with such name should be added, with the value set to true.
// If an object already has a property with such name, property should be removed.
// The function returns modified object.
 *
 * Examples:
 * toggleProperty('valid', { required: true }) // returns { required: true, valid: true }
 * toggleProperty('valid', { valid: true, required: true }) // returns { required: true }
 */

/** 3. Write a function that accepts any number of strings as parameters and returns an object containing properties named from these strings.
//The value of the property should be equal to the order of passed strings (first string receives value 1, second value 2 etc.)
 *
 * Example:
 * getObjectFromParams('apples', 'bananas', 'oranges')
 * returns: { 'apples': 1, 'bananas': 2, 'oranges': 3 }
 *
 * Tip: use for loop and rest parameters
 */

/** 4. Write a function that given an object, returns number of its properties or the sum of values of
// its properties - whichever is largest.
// Make sure your code doesn't explode! Before adding values of properties,
// check that they are integers. If one of them is not an integer, print a warning message and return.
//  * Provide a default value for the object, in case it's not passed.
 *
 * Example:
 * input: { apples: 2, bananas: 3 }, output: 5
 * input: { apples: 1, bananas: 0 }, output: 2
 * input: { apples: 1, bananas: 1 }, output: 2
 * input: nothing or {}, output: 0
 * input: { apples: 'bananas' }, output: print warning message
 *
 * Tip: you can use Math.max() to get the largest of values.
 */

/** 5. Write a function that tells you the data type of the passed parameter.
 * Following values can be returned:
 * 'string'
 * 'boolean'
 * 'number'
 * 'undefined'
 * 'function'
 * 'array'
 * 'object'
 *
 * Tip: You will have to use both typeof and instanceof methods to return all possible values.
 */

/** 6. Write a function, that converts string to numbers and numbers to strings.
 * That is, when a function receives a number, it returns it converted to a string.
 * When receives a string, tries to convert it to an integer. If this is not possible,
 * returns boolean value of that string (never returns NaN).
 *
 * Example:
 * input: 21, output: '21'
 * input: '3littlePigs', output: 3
 * input: 'lalala', output: true
 * input: '', output: false
 */
