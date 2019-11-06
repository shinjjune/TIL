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
    .in(["backend"])
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log("실습:1", courses);
  const courses2 = await Course.find({ isPublished: true })
    .or([{ tags: "frontend" }, { tags: "backend" }]) // tags:["fronted","backend"] 두개 다 있는것
    .sort({ price: -1 })
    .select({ name: 1, price: 1 });
  console.log("실습2:", courses2);
  const courses3 = await Course.find()
    .where("price")
    .gte(15)
    .where("name")
    .regex(/js/i);
  console.log("실습3:", courses3);
}
read();

// Course.find().then(res => console.log(res));
