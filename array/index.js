const cities = [
  { name: 'New York', population: 8405837 },
  { name: 'Los Angeles', population: 3884307 },
  { name: 'Chicago', population: 2718782 },
  { name: 'Houston', population: 2195914 },
  { name: 'Philadelphia', population: 1553165 },
  { name: 'Phoenix', population: 1513367 },
  { name: 'San Antonio', population: 1409019 },
  { name: 'San Diego', population: 1355896 },
  { name: 'Dallas', population: 1257676 },
  { name: 'San Jose', population: 998537 },
  { name: 'Austin', population: 885400 },
  { name: 'Indianapolis', population: 843393 },
  { name: 'Jacksonville', population: 842583 },
  { name: 'San Francisco', population: 837442 },
  { name: 'Columbus', population: 822553 },
  { name: 'Charlotte', population: 792862 },
  { name: 'Fort Worth', population: 792727 },
  { name: 'Detroit', population: 688701 },
  { name: 'El Paso', population: 674433 },
  { name: 'Memphis', population: 653450 },
  { name: 'Seattle', population: 652405 },
  { name: 'Denver', population: 649495 },
  { name: 'Washington', population: 646449 },
  { name: 'Boston', population: 645966 },
  { name: 'Nashville-Davidson', population: 634464 },
  { name: 'Baltimore', population: 622104 },
  { name: 'Oklahoma City', population: 610613 },
  { name: 'Louisville/Jefferson County', population: 609893 },
  { name: 'Portland', population: 609456 },
  { name: 'Las Vegas', population: 603488 },
  { name: 'Milwaukee', population: 599164 },
  { name: 'Albuquerque', population: 556495 },
  { name: 'Tucson', population: 526116 },
  { name: 'Fresno', population: 509924 },
  { name: 'Sacramento', population: 479686 },
  { name: 'Long Beach', population: 469428 },
  { name: 'Kansas City', population: 467007 },
  { name: 'Mesa', population: 457587 },
  { name: 'Virginia Beach', population: 448479 },
  { name: 'Atlanta', population: 447841 },
  { name: 'Colorado Springs', population: 439886 },
  { name: 'Omaha', population: 434353 },
  { name: 'Raleigh', population: 431746 },
  { name: 'Miami', population: 417650 },
  { name: 'Oakland', population: 406253 },
  { name: 'Minneapolis', population: 400070 },
  { name: 'Tulsa', population: 398121 },
  { name: 'Cleveland', population: 390113 },
  { name: 'Wichita', population: 386552 },
];

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// Array.prototype.length
numberArray.length;

// Array.prototype.at()
numberArray.at(3); // 4
numberArray.at(-4); // 7

// Array.prototype.concat()
const concatedArray = numberArray.concat(stringArray);

// Array.prototype.every()
numberArray.every((currentValue, index, array) => {
  return typeof currentValue == 'number';
});
// or
numberArray.every((currentValue, index, array) => {
  return (
    currentValue !== undefined && currentValue !== null && !isNaN(currentValue)
  );
});

// Array.prototype.some()
numberArray.every((currentValue, index, array) => {
  return typeof currentValue == 'string';
});

// Array.prototype.fill()
const barkArray = new Array(10);
barkArray.fill('gaf', 3, 7);

// Array.prototype.filter()
// Array.prototype.sort()
// Array.prototype.map()
const millionPlusCities = cities.filter((city) => {
  return city.population > 1000000;
});

cities
  .filter((city) => {
    city.population < 100000;
  })
  .sort((a, b) => {
    b.population - a.population;
  })
  .map((city) => {
    // console.log(`${city.name}, ${city.population}`);
  });

// Array.prototype.find()
cities.find((city) => city.population == 98424);

// Array.prototype.findIndex()
cities.findIndex((city) => city.population == 98424);

// Array.prototype.forEach()
cities.forEach((city) => {
  if (city.population < 50000) console.log(`${city.name} ${city.population}`);
});

// Array.prototype.groupBy();
const sports = [
  { name: 'Football', isBall: true, players: 11 },
  { name: 'Volleyball', isBall: true, players: 6 },
  { name: 'Tenis', isBall: true, players: 1 },
  { name: 'Box', isBall: false, players: 1 },
  { name: 'Resling', isBall: false, players: 1 },
];
// let result = sports.groupBy(({ isBall }) => isBall);

// Array.prototype.includes();
stringArray.includes('g');

// Array.prototype.indexOf()
stringArray.indexOf('d');

// Array.prototype.lastIndexOf()
stringArray.lastIndexOf('h');

// Array.isArray()
Array.isArray(numberArray);

// Array.prototype.join()
// Array.prototype.reverse()
let palindrome = 'racecar';
palindrome.split('').reverse().join('');

// Array.from()
// Array.of()
// Array.prototype.keys()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.reduceRight()
// Array.prototype.reduce()
// Array.prototype.shift()
// Array.prototype.slice()
// Array.prototype.groupByToMap()
// Array.prototype.splice()
// Array.prototype.toLocaleString()
// Array.prototype.toSource()
// Array.prototype.toString()
// Array.prototype.unshift()
// Array.prototype.values()
// Array.prototype.copyWithin()
// Array.prototype[@@iterator]()
// get Array[@@species]
// Array.prototype[@@unscopables]
// Array.prototype.flat()
// Array.prototype.flatMap()
// Array.prototype.entries()
