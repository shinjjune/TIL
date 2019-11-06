// 동기적인 코드 작성
console.log("처음");
const result = longtime();
console.log(result);
setTimeout(longtime, 0);
console.log("끝");

// 비동기적

function longtime() {
  let counter = 0;
  for (var i = 0; i < 1000000000; i++) {
    counter++;
  }
  return counter;
}
