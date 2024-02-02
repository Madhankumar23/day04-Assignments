//Arrow Functions
//Arrow functions are anonymous functions. Functions without a name but they are often assigned to any variable. They are also called Lambda Functions.

//Question 1
//Print odd numbers in an array
const printOddNumbers = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
};
printOddNumbers([1, 2, 3, 4, 5]);
//Output: 1 3 5

//Question 2
//Convert all the strings to title caps in a string array
const titleCaps = arr => arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

console.log(titleCaps(["india","australia","england"]));
//Output:  ['India', 'Australia', 'England']

//Question 3
//Sum of all numbers in an array
const sumArray = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));
//Output: 15

//Question 4
//Return all the prime numbers in an array
const getPrimes = arr => {
    const isPrime = num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };
  
    return arr.filter(num => isPrime(num));
};
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Output: [2, 3, 5, 7]

//Question 5
//Return all the palindromes in an array
const getPalindromes = arr => {
    const isPalindrome = str => str === str.split('').reverse().join('');
    return arr.filter(word => isPalindrome(word));
};
console.log(getPalindromes(["madam","sir","level","hello"]));
//Output: ['madam', 'level']
  
  