let array = ['JavaScript', 'Array', 'Reverse', 'Example'];
let newArray = [];

for(i = array.length-1; i >= 0; i--) {
  newArray.push(array[i]);
}

console.log(newArray);


const arr = ['sense.','make', 'all', 'will', 'This'];
let reversed = [];
const reverseArray = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    
}
// console.log(reversed)

console.log(reverseArray(arr)); 