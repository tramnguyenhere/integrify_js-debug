// /*
// 1. Fix the bugs in the codes below, to make the console print out different numbers
// from 0 to 100
//  */

// const printNum = () => {
//   for (let i = 0; i <= 100; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
// };

// printNum();

/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] .
You only need to produce the same array as expected result, no need to consider other
possibility.
 */

// let myArr = [
//   '12-24-2014',
//   '09-2022-23',
//   '12-30-2021',
//   '08-02-2021',
//   '07-15-2018',
//   '2019-12-14',
//   '2022-14-12',
// ];
// const fixDate = (array) => {
//   return array.map((date) => {
//     const dateComponents = date.split('-');
//     const year = dateComponents.find((component) => component.length > 2);
//     const dayOrMonth = dateComponents.filter(
//       (component) => component.length === 2
//     );

//     const dayFind = dayOrMonth.find((component) => component > 12);
//     const day = dayFind ? dayFind : dayOrMonth[1]; //The question specifies the order of dates would be written in order month-day-year; therefore, if there is no signal to distinguish day and month, day would be second element.

//     const month = dateComponents.find(
//       (component) => component.length <= 2 && component !== day
//     );

//     return `${day}-${month}-${year}`;
//   });
// };
// let newArr = fixDate(myArr);
// console.log(newArr);

/*
// 3. Counter function
// Write a counter funtion to print out in console the time difference between 2 given date
// Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
// */
// const dateFrom = new Date(500000);
// const dateTo = new Date(1000000000);

// const counter = (from, to) => {
//   const secondsPerDay = 24 * 60 * 60;
//   const secondsPerHour = 60 * 60;
//   const secondsPerMinute = 60;

//   const diff = Math.abs(to - from) / 1000; // convert to seconds
//   const days = Math.floor(diff / secondsPerDay);
//   const hours = Math.floor((diff % secondsPerDay) / secondsPerHour);
//   const minutes = Math.floor(
//     ((diff % secondsPerDay) % secondsPerHour) / secondsPerMinute
//   );
//   const seconds = Math.floor(
//     ((diff % secondsPerDay) % secondsPerHour) % secondsPerMinute
//   );

//   return `${days} days - ${hours} hours - ${minutes} minutes - ${seconds} seconds`;
// };

// const timer = counter(dateFrom, dateTo);
// console.log(timer);

// /*
// 4. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
// it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
// If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
// to array, and so on.
// */

// const generateNewFolderName = (existingFolders) => {
//   let newFolderTitle = 'New Folder';
//   let newFolderNumber = 0;

//   while (existingFolders.includes(newFolderTitle)) {
//     newFolderNumber++;
//     newFolderTitle = `New Folder (${newFolderNumber})`;
//   }

//   existingFolders.push(newFolderTitle);

//   return newFolderTitle;
// };

// let folder = [];
// generateNewFolderName(folder);
// generateNewFolderName(folder);
// generateNewFolderName(folder);
// generateNewFolderName(folder);
// console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']

// /* 5. Write a higher order function in JavaScript called debounce that can be used to debounce a callback function.
// The debounce function should take two arguments: the callback function to debounce and the delay time in milliseconds.
// The debounced function returned by debounce should wait until the delay time has passed before calling the callback function.
// If the debounced function is called again within the delay time, the timer should be reset and the callback function should be called after the delay time has passed.
// Your solution should be implemented in JavaScript without using any third-party libraries or frameworks. */

// const debounce = (callback, timer) => {
//   let timeoutId;

//   return function (...args) {
//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       callback.apply(this, args);
//     }, timer);
//   };
// };

// const debouncedCallback = debounce(
//   () => console.log('this should print out only once'),
//   1000
// );

// //This is the test code for the debounce function
// for (let i = 0; i < 5; i++) {
//   debouncedCallback();
// }

// /* 6. Create a function called cacheFunc that takes another function as an argument and returns a new function.
// The new function should cache the result of the original function for each set of arguments that it's called with.
// If the new function is called with the same arguments again, it should return the cached result, instead of calling the original function again.
// The new function should have a cache property that stores the cached results. */

// const cacheFunc = (callback) => {
//   const cache = {};
//   return (...args) => {
//     let argsKey = JSON.stringify(args);
//     if (cache[argsKey]) {
//       return cache[argsKey];
//     } else {
//       const result = callback(...args);
//       cache[argsKey] = result;
//       return result;
//     }
//   };
// };

// //This is the test code for cacheFunc
// const addition = (a, b) => {
//   console.log('addition of ' + a + ' and ' + b);
//   return a + b;
// };
// const subtraction = (a, b) => {
//   console.log('subtraction of ' + a + ' and ' + b);
//   return a - b;
// };
// const cacheAddition = cacheFunc(addition);
// const cacheSubtraction = cacheFunc(subtraction);
// console.log(cacheAddition(10, 5)); // should print out: "addition of 10 and 5" and "15"
// console.log(cacheAddition(10, 5)); // should print out: "15"
// console.log(cacheAddition(10, 9)); // should print out: "addition of 10 and 9" and "19"
// console.log(cacheAddition(10, 9)); // should print out: "19"
// console.log(cacheSubtraction(10, 5)); // should print out: "subtraction of 10 and 5" and "5"
// console.log(cacheSubtraction(10, 5)); // should print out: "5"

// /* 7. Check the code below, fix the bug and complete withMetrics to make the final console.log
// print out the expect result */
// const createRecipe = (name, instructions) => {
//   return {
//     name,
//     instructions,
//     printInstructions() {
//       console.log(`Instructions for ${this.name}:`);
//       console.log(
//         this.instructions +
//           `for ${this.time} seconds. Contain ${this.calories} calories`
//       );
//     },
//   };
// };

// const withMetrics = (time, calories) => {
//   return (recipe) => {
//     recipe.time = time;
//     recipe.calories = calories;
//     return recipe;
//   };
// };

// const pancakeRecipe = withMetrics(
//   30,
//   200
// )(createRecipe('Pancakes', 'Mix flour, eggs, and milk. Cook on a griddle.'));
// /** Expected result
//  * Instructions for Pancakes:
//  * Mix flour, eggs, and milk. Cook on a griddle.for 30 seconds. Contain 200 calories
//  */
// pancakeRecipe.printInstructions();
