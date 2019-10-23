// ES5
const computers = [
  { name: "mac-air", ram: 8 },
  { name: "gram", ram: 4 },
  { name: "mac-pro", ram: 16 }
];

let everyComputersAvailable = true;
let someComputersAvailable = false;

for (var i = 0; computers.length; i++) {
  const computer = computers[i];
  if (computer.ram < 8) {
    everyComputersAvailable = false;
    break;
  }
  if (computer.ram >= 8) {
    someComputersAvailable = true;
    break;
  }
}

// ES6
everyComputersAvailable = computers.every(computer => computer.ram > 8);
someComputersAvailable = computers.some(computer => computer.ram > 8);

//실제로는?
const data = [
  { name: "alex", answer: "barca" },
  { name: "zidane", answer: "" },
  { name: "rooney", answer: "manU" }
];

const everyUserAnswered = data.every(e => e.answer.length > 0);

// 실습
const users = [
  { id: 1, submit: true },
  { id: 2, submit: false },
  { id: 3, submit: true },
  { id: 4, submit: true }
];
// 모든사람이 제출했나요?
const everyUserSubmit = users.every(e => (e.submit.length = 4));
// console.log(everyUserSubmit);
// 한명이라도 제출했나요?
const someUserSubmit = users.some(e => e.submit.length > 0);

// 실습2
function some(arr, callback) {
  return !arr.every(e => !callback(e));
}
console.log(some(users, e => e.submit));
