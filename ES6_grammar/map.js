// ES5
const numbers = [1, 2, 3];
const dNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  dNumbers.push(numbers[i] * 2);
}

// ES6
const tNumbers = numbers.map(number => number * 3);
console.log(tNumbers);

// const data = [3, 5, 7, 9];

// data.map(e => {
//   return (<h1>{e}</h1>);
// });

// 실습1
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const heights = images.map(ele => ele.h);
console.log(heights);

// 실습2
function pluck(arr, key) {
  return arr.map(arr => arr[key]);
}
const result = pluck(images, "w");
console.log(result);
