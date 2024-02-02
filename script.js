//Anonymous Function
//It is a function without a name, just only a function keyword
//It can only accessed by a variable it is stored in as a function as a value
//It may have a multiple arguments

//Question 1
//Print odd numbers in an array
const oddNumbers=function(arr){
    for(let num of arr){
        if(num%2 !== 0){
            console.log(num);
        }
    }
};
oddNumbers([9,8,7,6,5,4,3,2,1]);
//Output : 9 7 5 3 1

//Question 2
//Convert all the strings to title caps in a string array
const titleCaps=function(arr){
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};
console.log(titleCaps(["india","australia","england"]));
//Output :  ['India', 'Australia', 'England']

//Question 3
//Sum of all numbers in an array
const sumOfArr=function(arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum;
};
console.log(sumOfArr([1,2,3,4,5]));
//Output : 15

//Question 4
//Return all the prime numbers in an array
const getPrime=function(arr){
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
    return primeArr;
};
console.log(getPrime([2,3,4,5,6,7,8,9]));
//Output: [2,3,5,7]

//Question 5
//Return all the palindromes in an array
const getpalindromes=function(arr){
    const isPalindrome= str => str === str.split('').reverse().join('');
    const palindromes = arr.filter(word => isPalindrome(word));
    return palindromes;
};
console.log(getpalindromes(["madam","sir","level","hello"]));
//Output: ['madam', 'level']

//Question 6
//Return median of two sorted arrays of the same size
const getMedian=function(arr1,arr2){
    const comArr=arr1.concat(arr2).sort((a, b) => a - b);
    return (comArr.length % 2 === 0)
    ? (comArr[comArr.length / 2 - 1] + comArr[comArr.length / 2]) / 2
    : comArr[Math.floor(comArr.length / 2)];
};
console.log(getMedian([1,2,3],[5,6,7]));
//Output: 4

//Question 7
//Remove duplicates from an array
const removeDuplicates=function(arr){
    const resArr=[];
    for(let num of arr){
        if(!resArr.includes(num))
            resArr.push(num);
    }
    return resArr;
};
console.log(removeDuplicates([1,1,2,2,2,3,3,3,3]));
//Output: [1, 2, 3]

//Question 8
//Rotate an array by k times
const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    const rotatedArray = arr.slice(arr.length - rotations).concat(arr.slice(0, arr.length - rotations));
    return rotatedArray;
};
console.log(rotateArray([1,2,3,4],3));
//Output: [2, 3, 4, 1]
  