const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "User" }, // user의 _id를 가져와야함.
  contents: String
});

const Article = model("Article", articleSchema);

function validateArticle(article) {
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string(),
    contents: Joi.string()
  });
  return schema.validate(article);
}
module.exports = {
  Article,
  validateArticle
};
