console.log(
  '/*========================================== \n Array Cardio Day 2 \n ====================================//'
);
/*=================================================================*/
// ========== Array Cardio Day 2 ====================//

const peopleArray = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

/*=================================================================*/
// Array.prototype.some()
// is at least one person 19 or older?

const isAdult = peopleArray.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

console.log('At least one person is 19 or older:', isAdult);

/*=================================================================*/
// Array.prototype.every()
// is everyone 19 or older?

const isAllAdult = peopleArray.every((person) => {
  return new Date().getFullYear() - person.year > 19;
});
console.log('is everyone 19 or older?', isAllAdult);

/*=================================================================*/
/* Array.prototype.find()
 Find the comment with the ID of 823423  */
const findComment = comments.find((comment) => comment.id === 823423);
console.log(findComment);

/*=================================================================*/
/* Array.prototYpe.findIndex()
Find the comment with the ID of 823423 */

const commentIndex = comments.findIndex((comment) => comment.id === 823423);
console.log(commentIndex);

/* - Delete the comment with the ID of 823423 */
comments.splice(commentIndex, 1);
console.log('After a comment deleted', comments);
