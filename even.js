let numbers = [1,2,3,4,5,5,6];
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}
 
console.log(`Even numbers in an array are: ${even}`);
