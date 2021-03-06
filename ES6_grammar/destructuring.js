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
const tag = `<h1>this is ${labtop.model} of ${labtop.year} of ${labtop.price}</h1>`;
console.log(tag);
// ES6
const newTag = `<h1>this is ${model} of ${year} of ${price}</h1>`;
console.log(newTag);

const labtops = [
  {
    model: "gram",
    year: 2018,
    price: 100
  },
  {
    model: "samsung",
    year: 200,
    price: 50
  },
  {
    model: "apple",
    year: 2000,
    price: 150
  }
];
labtops.map(({ model }) => {
  return `<h1>${model}</h1>`;
});
