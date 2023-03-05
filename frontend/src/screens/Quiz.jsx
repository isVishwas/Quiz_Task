import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export default function Quiz() {

  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const playQuiz = () => {

    localStorage.removeItem('score');
    history.push('/quiz');

  }

  return (
    <div class='mt-5 flex justify-center items-center'>
      {
        userInfo ?
          <button
            onClick={() => playQuiz()}
            class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Let's Play Quiz
          </button> :
          <div class='flex items-center justify-center'>
            <div class='mr-3'>Please Login to Play Quiz!</div>

            <Link to={'/login'}>
              <button
                // onClick={() => playQuiz()}
                class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Login
              </button>
            </Link>

          </div>
      }
    </div>
  )
}
