const Question = require("../models/QuestionModel");
const asyncHandler = require("express-async-handler");

const createQuestion = asyncHandler(async (req, res) => {
    
const question = await Question.create(req.body);

  if (question) {
    res.status(201).send();
  } else {

    res.status(400);
    throw new Error("User Already Exists!");
  }
});


const getQuestions = asyncHandler(async (req, res) => {
    
  const questions = await Question.find({});
  
    if (questions) {
      res.status(200).json({
        result : questions
      });
    } else {
  
      res.status(400);
      throw new Error("User Already Exists!");
    }
  });



module.exports = {
    createQuestion,
    getQuestions
};
