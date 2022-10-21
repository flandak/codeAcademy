const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.foreach(number => {
  return number * 10;
});
console.log(bigNumbers)