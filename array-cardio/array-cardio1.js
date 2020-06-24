console.log(
  '/*========================================== \n Array Cardio Day 1 \n ====================================//'
);
/*=================================================================*/
// ========== Array Cardio Day 1 ====================//

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1943 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Blair, Tony',
  'Blake, William',
];

/*=================================================================*/
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);
console.log('all inventors in 1500:', fifteen);

/*=================================================================*/
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names.

const firstLast = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log('Inventors first & last name:', firstLast);

/*=================================================================*/
// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest.

const sortInventors = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.log('Sor Inventors by age:', sortInventors);

/*=================================================================*/
// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log('Inventors total years:', totalYears);

/*=================================================================*/
// Array.prototype.sort()
// 5. Sort the inventors by years lived

const oldestInventor = inventors.sort((a, b) => {
  lastOne = a.passed - a.year;
  nextOne = b.passed - b.year;
  return lastOne > nextOne ? -1 : 1;
});
console.log('Oldest Inventor:', oldestInventor);

/*=================================================================*/
// Array.prototype.sort()
// 7. Sort the people alphabetically by LAST name:

const alpha = people.sort(function (lastOne, nextOne) {
  //convert the names into fist and last name without having comma in between.
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');

  return aLast > bLast ? 1 : -1;
});

console.log(alpha);

/*=================================================================*/
// 8. Reduce Exercise
// Sum up the instances of each of these vehicles in an object.
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

/* start with empty object.
   Every time we loop throw the array, we see if the item has a value > 0
   if so, we increment its entry on the initial object.
*/
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }

  obj[item]++;
  return obj;
}, {});

console.log(transportation);
