const mongoose = require("mongoose");
mongoose // mongoose 사용해서 mongodb 연결
  .connect("mongodb://localhost/exercise-basic", {
    // playground DB
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB에 연결되었습니다."))
  .catch(error => console.error(error));

const schema = mongoose.Schema();

const Course = mongoose.model("Course", schema);

async function read() {
  const courses = await Course.find({ isPublished: true })
    .where("tags")
    .in(["backend"]) // backend 항목만 선택
    .sort({ name: 1 }) // name 오름차순
    .select({ name: 1, author: 1 }); // name과 author 추출
  console.log("실습:1", courses);
  const courses2 = await Course.find({ isPublished: true })
    .or([{ tags: "frontend" }, { tags: "backend" }]) // backend또는 frontend 항목선택 cf)tags:["fronted","backend"] 두개 다 있는것
    .sort({ price: -1 }) // price 내림차순
    .select({ name: 1, price: 1 }); // name과 price 추출
  console.log("실습2:", courses2);
  const courses3 = await Course.find()
    .where("price")
    .gte(15) // price 15이상이거나
    .where("name") // name js/i 대소문자 구별 x
    .regex(/js/i);
  console.log("실습3:", courses3);
}
read();

// Course.find().then(res => console.log(res));
