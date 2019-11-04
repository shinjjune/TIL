const url = "https://naver.com";

console.log("실행된다구요!!!");
const log = msg => {
  // Something with url;
  console.log(`Logging Message : ${msg}`);
};

console.log("또 되지롱~~");
module.exports = log;
// module.exports.log = log;
// exports.log=log;
// exports = log; // module.exports 에는 아무것도 할당되지 않았습니다.
