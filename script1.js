//IIFE - Immediately-Invoked Function Expression
//function that defined and executed immediately

//Question 1
//Print odd numbers in an array
(function(arr) {
    for (let num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  })([1, 2, 3, 4, 5]);
//Output: 1 3 5

//Question 2
//Convert all the strings to title caps in a string array
const titleCapsResult = (function(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
})(["india","australia","england"]);
console.log(titleCapsResult);
//Output:  ['India', 'Australia', 'England']

//Question 3
//Sum of all numbers in an array
const sumResult = (function(arr) {
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum;
})([1, 2, 3, 4, 5]);
console.log(sumResult);
//Output: 15

//Question 4
//Return all the prime numbers in an array
(function(arr) {
    let primeArr=[];
    for(let i of arr){
        if(isPrime(i)) primeArr.push(i);
    }
    function isPrime(num){
        if(num>=2){
            for(let i =2;i<num;i++){
                if(num%i==0)
                    return false;
            }
        }
        return true;
    }
    console.log(primeArr);  
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);
//Output: [2, 3, 5, 7]

//Question 5
//Return all the palindromes in an array
(function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');
    const palindromes = arr.filter(word => isPalindrome(word));
    console.log(palindromes);
})(["madam","sir","level","hello"]);
//Output:  ['madam', 'level']

//Question 6
//Return median of two sorted arrays of the same size
(function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = combinedArray.length;
    const median = length % 2 === 0
      ? (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2
      : combinedArray[Math.floor(length / 2)];
  
    console.log(median);
})([1, 3, 5], [2, 4, 6]);
//Output: 4

//Question 7
//Remove duplicates from an array
(function(arr) {
    const resArr=[];
    for(let num of arr){
        if(!resArr.includes(num))
            resArr.push(num);
    }
    console.log(resArr);
})([1, 2, 2, 3, 4, 4, 5]);
//Output: [1, 2, 3, 4, 5]

//Question 8
//Rotate an array by k times
(function(arr, k) {
    const rotations = k % arr.length;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);
//Output: [3, 4, 5, 1, 2]