import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { listOfQuestions } from '../actions/quizAction';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';

export default function AnswersScreen() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [answers, setAnswers] = useState([]);

    const quizQuestionsDetails = useSelector((state) => state.quizQuestionsDetails);
    const { loading, error, quizQuestions } = quizQuestionsDetails;



    useEffect(() => {
        dispatch(listOfQuestions());

    }, [])

    const playQuiz = () => {

        localStorage.removeItem('score');
        history.push('/quiz');
    }


    return (
        <>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <button
                        onClick={() => playQuiz()}
                        class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Play Quiz Again
                    </button>

                    <div class="flex justify-center">
                        <div
                            class="block max-w-2lg rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                            {
                                quizQuestions && quizQuestions.questions.length > 0 && quizQuestions.questions.map((data, index) => (
                                    <>
                                        <h5
                                            class="mb-2 mt-5 text-xxl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            <strong>{++index}. {data.text}</strong>
                                        </h5>
                                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            {
                                                data.answers.length > 0 && data.answers.map((ans, seq) => (
                                                    <div class='mt-3'>

                                                        {

                                                            data.correctIndex == seq + 1 ?

                                                                <div class="bg-green-100 mt-1 w-50 border border-green-400 text-green-700 px-3 py-2 rounded relative" role="alert">
                                                                    <span class="block sm:inline mr-2">{++seq}.</span>
                                                                    <span class="block sm:inline">{ans}</span>
                                                                    <span class="absolute top-0 bottom-0 right-0 px-3 py-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 fill-current" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                                                                    </span>

                                                                </div> :

                                                                <div class="bg-red-100 mt-1 w-50 border border-red-400 text-red-700 px-3 py-2 rounded relative" role="alert">
                                                                    <span class="block sm:inline mr-2">{++seq}.</span>
                                                                    <span class="block sm:inline">{ans}</span>
                                                                    <span class="absolute top-0 bottom-0 right-0 px-3 py-2">
                                                                        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                                                    </span>

                                                                </div>
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </p>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                </>
            )}
        </>
    )
}
