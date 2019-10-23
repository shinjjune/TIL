// ES5
const colors = ["red", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ES6
colors.forEach(ele => console.log(ele));

// 실습
function forEach(arr, callback) {
  //   if (!Array.isArray(arr)) throw new Error("배열을 넣어주세요");
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(colors, ele => console.log(ele));

// 실습2
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const area = [];

// area.push()
images.forEach(ele => {
  area.push(ele.h * ele.w);
});

console.log(area);
