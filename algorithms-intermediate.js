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

console.log(sumAll([1, 4]));

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
      ? str.substring(consonants) +
        str.substring(0, consonants) +
        'ay'
      : str + 'way';

  return str;
}

console.log(translatePigLatin('glove'));

/* 07 
  Search and Replace
  1st arg. is the sentence to perform the search and replace on.
  2nd arg. word that you will be replacing (before).
  3ed arg. will be replacing the second argument with (after).
*/

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }

  return str.replace(before, after);
}

console.log(
  myReplace(
    'A quick brown fox jumped over the lazy dog',
    'jumped',
    'leaped'
  )
);

/* 08
  DNA Pairing
  Base pairs are a pair of AT and CG.
  For the input ACG, return [["A", "T"], ["C","G"],["G", "C"]]
*/
function pairElement(str) {
  const helper = (elm) => {
    if (elm === 'A') return 'T';
    else if (elm === 'T') return 'A';
    else if (elm === 'C') return 'G';
    else if (elm === 'G') return 'C';
  };

  return str.split('').map((pair) => {
    let newPair = [pair, helper(pair)];

    return newPair;
  });
}
console.log(pairElement('GCG'));

/* 09
  Missing Letters  
  Find the missing letter in the passed letter range and return it.
*/

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter('abce'));

/** 10 
  Sorted UnionPassed
  Write a function that takes two or more arrays and returns 
  a new array of unique values in the order of the original provided arrays.
*/

function uniteUnique(arr) {
  const allArrays = [...arguments];
  const output = [];

  for (let arr of allArrays) {
    for (let num of arr) {
      if (!output.includes(num)) {
        output.push(num);
      }
    }
  }

  return output;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
