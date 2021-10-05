// Array declaration

// let pokemon = new Array();
// let pokemon = [];

// Initializing array variable
let pokemon = ["charizard", "Mewtoo"];

// Accessing length of array
console.log(pokemon.length); // o/p - 2

// Accessing array values with indexes
console.log(pokemon[0]); // o/p - charizard

// Accessing last index of array
console.log(pokemon[pokemon.length - 1]); // o/p - Mewtoo

// forEach loop over array
pokemon.forEach((item, index, array) => {
  console.log({ item, index });
});
// o/p -
// {item: 'charizard', index: 0}
// {item: 'Mewtoo', index: 1}

// Appending data in array
console.log(pokemon.push("Greninja")); // o/p - 3

// Removes last item form array
console.log(pokemon.pop()); // o/p - Greninja

// Remove an item from the beginning of an Array
console.log(pokemon.shift()); // o/p - charizard

// Add an item to the beginning of an Array
console.log(pokemon.unshift("Sandru")); // o/p - 2

// Add an item to the beginning of an Array
console.log(pokemon.indexOf("Mewtoo")); // o/p - 1
console.log(pokemon.indexOf("Magmar")); // o/p - (-1)

// Remove an item by index position
console.log(pokemon.splice(0, 1)); // o/p - ['Sandru']

// One by one appending data
// pokemon.push("Mewtoo");
// pokemon.push("Dragonit");
// pokemon.push("Garados");

// Appending in a single line
pokemon.push("Mewtoo", "Dragonit", "Garados");

// Remove items from an index position
console.log(pokemon.splice(1, 2)); // o/p - ['Mewtoo', 'Dragonit']

// Shallow copy of array using slice
let shallowCopy = pokemon.slice();
console.log(shallowCopy); // o/p - ['Mewtoo', 'Garados']

// Accessing untacked
console.log(pokemon[2]); // o/p - undefined

// Setting up an untacked index with value
pokemon[5] = "Magmar";
console.log(pokemon); // o/p -  ['Mewtoo', 'Garados', empty × 3, 'Magmar']

// Setting up an untacked index with value
console.log(Object.keys(pokemon)); // o/p - ['0', '1', '5']
console.log(pokemon.length); // o/p - 6
console.log(pokemon[4]); // o/p - undefined

// Array shortening
pokemon.length = 2;
console.log(Object.keys(pokemon)); // o/p - ['0', '1']
console.log(pokemon); // o/p - ['Mewtoo', 'Garados']

// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

/**
 * @description: explain
 **/

const myRe = /d(b+)(d)/i;
const myArray = myRe.exec("cdbBdbsbz");
console.log(myArray);

// get Array[@@species]

// Creates a new Array instance from an array-like or iterable object.
const iterObj = "instance".toUpperCase();
const arrObj = Array.from(iterObj);
console.log(arrObj); // o/p -  ['I', 'N', 'S', 'T', 'A', 'N', 'C', 'E']

// Cheking is variable is an array
console.log(Array.isArray(arrObj)); // o/p - true

// Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(1, 2, 3, {}, "local")); // o/p - [1, 2, 3, {…}, 'local']

// Appeding array
pokemon.push("Jiglipuff", "Onix");

// Print array
console.log(pokemon); // o/p - ['Mewtoo', 'Garados', 'Jiglipuff', 'Onix']

// Prototype Methods

// Value at index
console.log(pokemon.at(0)); // o/p - Mewtoo
console.log(pokemon.at(-1)); // o/p - Onix

// Concat two array's
const arr1 = ["Vinasore", "Chicorita"];
console.log(pokemon.concat(arr1)); // o/p - ['Mewtoo', 'Garados', 'Jiglipuff', 'Onix', 'Vinasore', 'Chicorita']

// Array copywith in
const array1 = ["a", "b", "c", "d", "e"];
console.log(array1.copyWithin(0, 2, 4)); // o/p - ["c", "d", "c", "d", "e"]
console.log(array1.copyWithin(1, 3)); // o/p - ["c", "d", "e", "d", "e"]

// Array enteries
console.log(pokemon); // o/p - ['Mewtoo', 'Garados', 'Jiglipuff', 'Onix']\

const iter = pokemon.entries();
// console.log(iter.next().value); // o/p - [0, 'Mewtoo']

for (const [index, element] of iter) {
  console.log(index, element);
}
// o/p -
// 0 'Mewtoo'
// 1 'Garados'
// 2 'Jiglipuff'
// 3 'Onix'

// Array.prototype.every() Returns true if every element in this array satisfies the testing function.

const checkPokemonNameList = (pokemon) => pokemon.length > 2;
const checkOtherPokemonNameList = (pokemon) => pokemon.length < 2;

console.log(pokemon.every(checkPokemonNameList)); // o/p - true
console.log(pokemon.every(checkOtherPokemonNameList)); // o/p - false

//  Array.prototype.fill() Fills all the elements of an array from a start index to an end index with a static value.
pokemon.fill("Butterfree", 3, 4);
console.log(pokemon); // o/p - ['Mewtoo', 'Garados', 'Jiglipuff', 'Butterfree']

// Array.filter
const newList = pokemon.filter((item, index, array) => {
  return item.length > 8;
});
console.log(newList); // o/p - ['Jiglipuff', 'Butterfree']

//  Array.prototype.find()
const pokeList = pokemon.find((element) => element.length > 8);
console.log(pokeList); // o/p - Jiglipuff

// Array.prototype.findIndex()
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log(index); // 3
console.log(fruits[index]); // blueberries

// Array.flat
const arr12 = [0, 1, 2, [3, 4]];
console.log(arr12.flat()); // o/p - expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(3)); // o/p - expected output: [0, 1, 2, 3, 4]

// Array.flatMap
const arr123 = [
  "Notice, the output list length can be different from the input list length.",
];
console.log(arr123.flatMap((x) => x.split(" "))); // o/p -  ['Notice,', 'the', 'output', 'list', 'length', 'can', 'be', 'different', 'from', 'the', 'input', 'list', 'length.']

//  Array.includes
console.log(pokemon.includes("Giglipuff")); // o/p - false

// Array.indexOf
console.log(pokemon.indexOf("Jiglipuff")); // o/p - 2

// Array.join
console.log(pokemon.join('->-><-<-')); //'o/p - Mewtoo->-><-<-Garados->-><-<-Jiglipuff->-><-<-Butterfree

// Array.keys
const arr = ['a', , 'c'];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // o/p - ['0', '2']
console.log(denseKeys);  // o/p - [0, 1, 2]

// Array.lastIndexOf
const numbers = [1, 5, 9, 2];
console.log(numbers.lastIndexOf(2)); // o/p - 3
console.log(numbers.lastIndexOf(2, 2));;  // o/p - (-1)

// Array.reduce
const arr21 = [1,2,3,4,5];
const result = arr21.reduce( (p,c) => p+c , 50);
console.log(result);

// Array.reduceRight
const resultRight = pokemon.reduceRight( (accumulator,current) => {
  return accumulator+current;
});
console.log(resultRight);

// Array.slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // o/p -  ['camel', 'duck', 'elephant']
console.log(animals); // o/p - ['ant', 'bison', 'camel', 'duck', 'elephant']

// Array.some
console.log([12, 5, 8, 1, 4].some(x => x > 10)); // o/p - true

// Array.splice
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
const removed = myFish.splice(2, 0, 'drum')
console.log(removed); // o/p - []
console.log(myFish ); // o/p - ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
const removedList = myFish.splice(2, 2, 'drum',"guitar");
console.log(removedList) // o/p -  ['drum', 'mandarin']
console.log(myFish ); // o/p - ['angel', 'clown', 'drum', 'guitar', 'sturgeon']
