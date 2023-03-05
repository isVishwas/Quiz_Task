const express = require("express");
const {
    createQuestion,
    getQuestions
} = require("../controllers/questionsController");

const router = express.Router();

//add Question
router.route("/").post(createQuestion).get(getQuestions);


module.exports = router;
