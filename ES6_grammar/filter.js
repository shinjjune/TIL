// ES5

const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vege" },
  { name: "apple", type: "fruit" },
  { name: "egg", type: "diary" },
  { name: "yogurt", type: "diary" }
];

const fruits = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    fruits.push(products[i]);
  }
}
console.log(fruits);

// ES6
const diary = products.filter(ele => {
  return ele.type === "diary";
});
console.log(diary);

// 실제로는?
const comments = [
  { id: 1, author: "june", contents: "blabla" },
  { id: 1, author: "shin", contents: "auba" },
  { id: 1, author: "hyuk", contents: "ozil" },
  { id: 1, author: "june", contents: "santi" }
];

const june = comments
  .filter(co => {
    return co.author === "june";
  })
  .map(co => co.contents);
console.log(june);

// 실습1
const numbers = [1, 4, 2, 12, 14, 18, 23, 24, 77, 443, 101];
// filter 10~100사이 숫자만 보여주세요
const number = numbers.filter(fil => {
  if (fil > 10 && fil < 100) return true;
  return false;
});
const number2 = numbers.filter(fil2 =>
  fil2 > 10 && fil2 < 100 ? true : false
);
console.log(number);
console.log(number2);

// 실습2
// filter를 사용해서 reject함수를 만들어주세요 reject함수는 filter와 완전히 반대 작용을 하는 함수입니다.
function reject(arr, callback) {
  return arr.filter(e => !callback(e));
}

// reject(number,number=>number>10); => [1,3,5,6];
