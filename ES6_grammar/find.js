// ES5
const users = [
  { name: "auba" },
  { name: "laca" },
  { name: "ozil" },
  { name: "carl" }
];

let user = null;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "ozil") {
    user = users[i];
    break;
  }
}

// ES6
user = users.find(user => {
  return user.name === "auba";
});

// 실제로는
const data = [
  { id: 1, name: "saka" },
  { id: 2, name: "leno" },
  { id: 3, name: "luiz" },
  { id: 4, name: "cham" }
]; // DB에서 조회한 값

const whatWewant = data.find(e => e.id === 3);

// 실습
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vege" },
  { name: "apple", type: "fruit" },
  { name: "egg", type: "diary" },
  { name: "yogurt", type: "diary" }
];
// 프로덕트 중 이름이 egg인 제품을 가져와 주세요
const pro = products.find(e => e.name === "egg");
console.log(pro);
