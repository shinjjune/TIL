// ES5
const numbers = [10, 20, 30];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  // sum = sum +numbers[i]
}

// ES6

sum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);

let multiply = numbers.reduce((acc, number) => acc * number);

const strings = ["apple", " is", " good"];

const summed = strings.reduce((acc, str) => acc + str, "");
console.log(summed);

// map함수 구현하기
let dNumbers = numbers.map(e => e * 2);
dNumbers = numbers.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);

console.log(dNumbers);

// 실제로?(코테)
/*
올바르게 닫힌 괄호 : ((())) , ()()
올바르게 닫히지 않은 괄호: ), )()()(,
*/
function isGoodParents(string) {
  return !string.split("").reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    } else if (char === "(") {
      ++acc;
    } else {
      --acc;
    }
    return acc;
  }, 0);
}
// '()()' acc:0, char: ( =>1, ) => 0, ( => 1, ) => 0

// 실습
const participants = [
  { id: 1, type: "sitting" },
  { id: 2, type: "sitting" },
  { id: 3, type: "standing" },
  { id: 4, type: "standing" },
  { id: 5, type: "sitting" }
];

sum = participants.reduce((acc, number) => {
  if (number.type === "sitting") {
    ++acc;
  }
  return acc;
}, 0);
console.log(sum);

//실습2
//uniquer를 만들어봅시다
const samples = [10, 20, 30, 20, 40, 10, 50];
//const result = unique(samples);
//[10,20,30,40,50];
function unique(arr) {
  return arr.reduce((acc, element) => {
    if (!acc.find(el => el === element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}
