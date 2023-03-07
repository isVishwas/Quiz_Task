import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOfQuestions } from "../actions/quizAction";
import { Row, Col, Button } from "react-bootstrap";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { Link, useHistory } from "react-router-dom";
import { updateUserScore } from "../actions/userAction";
const HomeScreen = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [correctAnswerIndex, setCorrectAnswerIndex] = useState();
  const [SelectedAnswerIndex, setSelectedAnswerIndex] = useState();

  const userDetails = useSelector((state) => state.userLogin);

  const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quizQuestionsDetails = useSelector((state) => state.quizQuestionsDetails);
  const { loading, error, quizQuestions } = quizQuestionsDetails;

  // console.log("quizQuestions--->>>", quizQuestions)

  useEffect(() => {

    dispatch(listOfQuestions());

    localStorage.setItem('questionPicked', JSON.stringify([]));

  }, [dispatch]);


  // Function to compute scores
  const handleAnswerButtonClick = (index, clickedAnswer, correctAnswerIndex) => {

    setCorrectAnswerIndex(correctAnswerIndex);
    setSelectedAnswerIndex(index);

    setSelectedAnswer(clickedAnswer);

    console.log("selectedAnswer ==>>", clickedAnswer, index, correctAnswerIndex)

  }

  const nextQuestion = () => {

    const nextQuestion = currentQuestion + 1;
    const getScore = score + 1;


    let answersPicked = localStorage.getItem("questionPicked");
    let answersPickedArray = JSON.parse(answersPicked);
    answersPickedArray.push(selectedAnswer);
    localStorage.setItem('questionPicked', JSON.stringify(answersPickedArray))

    if (!selectedAnswer) {
      return alert("Please Pick one Answer from four!");
    } else {
      setSelectedAnswer('')
    }

    if (SelectedAnswerIndex == correctAnswerIndex) {

      setScore(getScore)
      localStorage.setItem('score', getScore);
    }

    if (nextQuestion < quizQuestions.questions.length && currentQuestion <= 8) {

      setTimeout(() => {

        setCurrentQuestion(nextQuestion);

      }, 500);

    } else {

      // console.log('you reached the end of the quiz',userDetails.userInfo._id);
      dispatch(updateUserScore({ id: userDetails.userInfo._id }));
      history.push('/quiz/result');
    }

  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col>

              <div class="max-w-2lg rounded overflow-hidden hover shadow-lg mt-5">
                <div class="px-6 py-4">

                  <div class="flex place-content-center bg-blue-500 text-white text-sm font-bold px-4 py-3 shadow" role="alert">
                    <span class='text-xl flex items-center '>{currentQuestion + 1}.</span>
                    <div class='text-xl flex items-center'>{quizQuestions && quizQuestions.questions[currentQuestion].text}</div>
                  </div>

                  <p class="text-gray-700 text-base mt-5 flex justify-center">
                    <Row>
                      {
                        quizQuestions && quizQuestions.questions[currentQuestion].answers.map((option, index) => (

                          <Col lg={6} className='mt-3 flex justify-center'>

                            <span class='mr-3 flex items-center '>{++index}.</span>

                            <button
                              className={` w-80 text-gray-800 font-semibold py-2 px-4 rounded shadow
                              ${SelectedAnswerIndex === index ? "bg-[#dbeafe]" : "bg-[#f1f5f9]"}`}
                              onClick={() => handleAnswerButtonClick(index, quizQuestions.questions[currentQuestion], quizQuestions.questions[currentQuestion].correctIndex)}
                            >
                              {option}
                            </button>

                          </Col>
                        ))
                      }
                    </Row>
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 flex justify-center">

                  <ul class="flex">

                    <li class="flex-2 mr-2">
                      <button
                        onClick={() => nextQuestion()}
                        class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Next Quiz
                      </button>
                    </li>

                  </ul>
                </div>
              </div>

            </Col>
          </Row>

        </>


      )}
    </>
  );
};

export default HomeScreen;
