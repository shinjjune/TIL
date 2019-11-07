const mongoose = require("mongoose");
const { Schema, connect, model } = mongoose;
let con = null;
//IIFE(Immediately Invoked Function Expression)) : 함수를 선언하자마자 바로 실행, async await 함수를 쓰려고

(async () => {
  try {
    //   연결
    con = await connect(
      "mongodb://localhost/real2",
      {
        useNewUrlParse: true
      }
    );
    // CREATE
    const userSchema = new Schema({
      name: String,
      email: { type: String, required: true, unique: true },
      nickname: String
    });
    const User = model("User", userSchema);
    const user1 = new User({
      name: "laca",
      email: "laca@zette.com",
      nickname: "scorer"
    });
    const user2 = new User({
      name: "ozil",
      email: "mesut@ozil.com",
      nickname: "passer"
    });
    const res1 = await user1.save();
    const res2 = await user2.save();
    console.log("저장결과 : ", res1, res2);

    // READ
    const users = await User.find();

    // UPDATE
    const updated = await User.updateOne(
      { _id: users[0]._id },
      { nickname: "goal~~~" }
    );
    console.log("업데이트 결과: ", updated);
    // DELETE
    const deleted = await User.deleteOne({ _id: users[0]._id });
    console.log("삭제결과 : ", deleted);
    const afterusers = await User.find();
    console.log("최종결과: ", afterusers);
  } catch (error) {
    console.log(error);
  } finally {
    // 연결과 CRUD가 성공적으로 끝났든 에러가 발생했든 상관없이 마지막에는 disconnect할겁니다.
    if (con) con.disconnect();
  }
})();
