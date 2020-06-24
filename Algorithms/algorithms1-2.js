/* CONVERT CELSIUS TO FAHRENHEIT
(0°C × 9/5) + 32 = 32°F */

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertToF(30));

/* FACTORIZE A NUMBER
 ex. 5! = 5x4x3x2x1 = 120 */

function factorize(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorize(num - 1);
  }
}
console.log(factorize(5));

/* REVERSE A STRING
ex. "Hallo" -> "ollaH"*/

function reverseString(str) {
  const newStr = str.split('').reverse().join('');
  return newStr;
}
console.log(reverseString('Hallo'));

/* FIND LONGEST WORD IN A STRING
ex. "Hi World" -> "World" */

function findLongestWordLength(str) {
  let longestWord = str.split(' ').sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}
console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);

/* RETURN LARGEST NUMBER IN AN ARRAY INTO NEW ARRAY
[[4, 5, 1, 3],[13, 27, 18, 26]] -> [5, 27]
*/

function largestOfFour(arr) {
  return arr.map((subArray) => {
    return Math.max.apply(null, subArray);
  });
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
    [-72, -3, -17, -10],
  ])
);

/* CONFIRM STRING LAST LETTER 
ex. ("Bastian", 'n') -> true
*/

function confirmEnding(str, target) {
  // const newStr = str.endsWith(target);
  // return newStr;
  const endStr = str.slice(str.length - target.length) === target;
  return endStr;
}
console.log(confirmEnding('Bastian', 'n'));

/* REPEAT STRING NUMBER OF TIMES 
ex. ("abc", 3) -> "abcabcabc" */

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
console.log(repeatStringNumTimes('abc', 3));

/* TRUNCATE A STRING
 + include ... at the end
ex. ("Hallo world", 5) -> "Hallo..."  */

function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + '...';
}
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

/* FINDER KEEPERS 
Returns first that passes a truth test 
ex. ([3,2], (num) => num % 2 === 0) -> 2 */

function findElement(arr, func) {
  let num = 0;
  return arr.find((num) => {
    return func(num);
  });
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

/* CHECK IF VALUE IS BOOLEAN
Check if a value is classified 
as a boolean. Return true or false.
 */

function booWho(bool) {
  return bool === true || bool === false ? true : false;
}
console.log(booWho(null));

/* TITLE CASE A SENTENCE
capitalize the first letter of each word.
ex. ("name is Rab") -> "Name Is Rab"
*/
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
      // word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
}
console.log(titleCase("I'm a little tea pot"));
