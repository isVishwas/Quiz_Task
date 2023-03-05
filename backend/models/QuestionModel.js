const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {

    questions: [

      {
        text: String,
        answers: [String],
        correctIndex: Number,

      }
    ]
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
