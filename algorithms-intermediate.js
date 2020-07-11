/** 01
  Sum All Numbers in a Range 
  sumAll([4,1]) should return 10
  
  -> Between min and max, there are (max − min +1 )
 */
function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return ((max - min + 1) * (max + min)) / 2;
}

sumAll([1, 4]);

/** 02 
  Diff Two Arrays
  Compare two arrays and return a new array 
  with any items only found in one of the two 
  given arrays, but not both. In other words, 
  return the symmetric difference of the two arrays.
  -> Concat both arrays 
   -> filter out uniq numbers using .indexOf() method 
 */
function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2];

  return newArr.filter((num) => {
    return arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1;
  });
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/* 03
  Seek and Destroy 
  Remove all elements from the initial array that are 
  of the same value as 2nd arguments.
*/

function destroyer(arr) {
  /*  -> Put all arguments* in an array using spread operator 
         and remove elements starting from 1 using slice method.
         * - Arguments object (local variable) .. Check MDN
      -> Check whether arguments include elements from an array 
         and return all that do not include(false)
   */
  const args = [...arguments].slice(1);
  return arr.filter((elm) => !args.includes(elm));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/* 04
  Wherefore art thou
  Make a function that looks through an array
  of objects (first argument) and returns an array 
  of all objects that have matching name and value 
  pairs (second argument).  
*/

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const keys = Object.keys(source);

  collection.forEach((element) => {
    if (keys.every((key) => element[key] === source[key])) {
      arr.push(element);
    }
  });
  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);

/** 05
  Spinal Tap Case
  Convert a string to spinal case. Spinal case 
  is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  const camelCases = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  const spacesAndDashes = camelCases.replace(/\s|_/g, '-');
  return spacesAndDashes.toLowerCase();
}
console.log(spinalCase('thisIsSpinalTap'));

/** 06
  Pig Latin
  - If a word begins with a consonant, 
    take the first consonant or consonant cluster, 
    move it to the end of the word, and add "ay" to it.
  - If a word begins with a vowel, just add "way" at the end.
 */

function translatePigLatin(str) {
  const vowels = 'aeiou'.split('');
  let consonants = 0;

  // Count consonants at the begging of the word. If none, break the loop.
  for (let i = 0; i < str.length; ++i) {
    if (!vowels.includes(str[i])) {
      ++consonants;
    } else break;
  }

  // assign the logic if there is one or more consonants.
  str =
    consonants > 0
      ? str.substring(consonants) + str.substring(0, consonants) + 'ay'
      : str + 'way';

  return str;
}

console.log(translatePigLatin('glove'));
