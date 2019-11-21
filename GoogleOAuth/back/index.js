const express = require("express");
const mongoose = require("mongoose");
const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");
const dbURI = "mongodb://localhost/google-login";

const { User } = require("./user");

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  mongoose
    .connect(dbURI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => {
      console.log("db연결되었습니다...");
      next();
    })
    .catch(error => next(error));
});

app.get("/user/check", async (req, res, next) => {
  // localhost:3000/user/check?email=shin@shin.com
  try {
    const user = await User.findOne({ email: req.query.email });
    if (user) {
      res.json({ result: true });
    } else {
      res.json({ result: false });
    }
  } catch (error) {
    res.json({ error });
  } finally {
    next();
  }
});

app.post("/user/join", async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    await user.save();
    res.json({ result: true });
  } catch (error) {
    res.json({ error });
  } finally {
    next();
  }
});

app.get("/user", async (req, res, next) => {
  const idToken = req.header("Authorization");
  const Client = new OAuth2Client(
    "970533117577-fvqpsvlm0rlq8nkf1fo7736vmabrk61a.apps.googleusercontent.com"
  );
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience:
        "970533117577-fvqpsvlm0rlq8nkf1fo7736vmabrk61a.apps.googleusercontent.com"
    });
    const payload = ticket.getPayload();
    res.json({ payload });
  } catch (error) {
    res.json({ error });
  } finally {
    next();
  }
});
app.use(() => mongoose.disconnect().then(() => console.log("db disconnected")));

app.listen(3000, () => console.log("서버 가동..."));
