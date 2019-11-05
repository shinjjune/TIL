const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB에 연결되었습니다."))
  .catch(error => console.error(error));
