// 토큰 인증
const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("./users");
const verifyToken = require("./verifyToken");

const app = express();

app.use(express.json());
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    res.json({ error: "Check your email or password" });
    return;
  }
  const secretKey = process.env.TOKEN_KEY || "secret";
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    secretKey,
    { expiresIn: "1m" } // 1분
  );
  res.json({ jwt: token });
});

app.get("/personal", (req, res) => {
  const { data, error } = verifyToken(req);
  if (data) res.json(data);
  if (error) res.json(error);
});

app.listen(3000, () => console.log("서버 가동중..."));
