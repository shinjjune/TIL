// 비구조화
// ES5
const computer = {
  model: "mac-pro",
  year: 2017,
  price: 400
};

// const model = computer.model;
// const year = computer.year;
// const price = computer.price;

// ES6
const labtop = {
  model: "gram",
  year: 2018,
  price: 100
};
const { model, year, price } = labtop;
console.log(labtop);

// 실제로는?
// ES5
const tag = `<h1>thisis${labtop.model} of ${labtop.year} of ${labtop.price}</h1>`;

// ES6
const newTag = `<h1>this is ${model} of ${year} of ${price}</h1>`;
