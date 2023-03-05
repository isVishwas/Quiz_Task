import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOfQuestions } from "../actions/quizAction";
import { Row, Col, Button } from "react-bootstrap";
// import ProductScreen from "./ProductScreen";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { Link, useHistory } from "react-router-dom";
const HomeScreen = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  // const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [correctAnswerIndex, setCorrectAnswerIndex] = useState();
  const [SelectedAnswerIndex, setSelectedAnswerIndex] = useState();

  const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quizQuestionsDetails = useSelector((state) => state.quizQuestionsDetails);
  const { loading, error, quizQuestions } = quizQuestionsDetails;

  // console.log("quizQuestions--->>>", quizQuestions)

  useEffect(() => {

    dispatch(listOfQuestions());

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

    if (!selectedAnswer) {
      return alert("Please choose one of the Answer first!")
    } else {
      setSelectedAnswer('')
    }

    if (SelectedAnswerIndex == correctAnswerIndex) {

      setScore(getScore)
      localStorage.setItem('score', getScore);
    }

    if (nextQuestion < quizQuestions.questions.length) {

      setTimeout(() => {

        setCurrentQuestion(nextQuestion);

      }, 500);

    } else {

      // alert('you reached the end of the quiz');

      history.push('/quiz/result');
    }

    console.log("score ===>>> ", score);

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
                {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                <div class="px-6 py-4">

                  <div class="flex place-content-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                    {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg> */}
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
                              class="bg-white w-80 hover:bg-blue-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
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
