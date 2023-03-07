import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import loginScreen from '../Images/mobile-login.jpg'

export default function Quiz() {

  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const playQuiz = () => {

    localStorage.removeItem('score');
    history.push('/quiz');

  }

  return (
    // <div className='flex justify-center shadow-lg'>
    // <img width={400} src={loginScreen} alt="" />
    // <div class='mt-5 flex justify-center items-center'>
    //   {
    //     userInfo ?
    //       <button
    //         onClick={() => playQuiz()}
    //         class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    //         Let's Play Quiz
    //       </button> :
    //       <div class=''>
    //         <div className='mr-3 font-extrabold'>Please Login to Play Quiz!</div>

    //         <Link to={'/login'}>
    //           <button
    //             class="bg-blue-500 items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    //             Login
    //           </button>
    //         </Link>

    //       </div>
    //   }
    // </div>
    // </div>

    <div class='flex justify-center'>
      <Row className=" mt-5 p-4">
        <Col class='mx-auto my-auto mb-4'>
          <div class='flex justify-center'>
            General Knowledge Quiz isn’t the most imaginative name. However, it is a pretty good quiz app.
            It omits the typical pop culture stuff in favor of more general knowledge questions.
            There are quizzes for history, literature, science, technology, geography, arts, humanities,
            and a general section.
          </div>

          {
            userInfo ?
            <div class='flex justify-center'>
              <button
                onClick={() => playQuiz()}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Let's Play Quiz
              </button>
              </div>
               :
              <div >

                <>
                  <div class='flex justify-center'>
                    <Link to={'/login'}>
                      <button
                        class="bg-blue-500 items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Please Login to Play Quiz!
                      </button>
                    </Link>
                  </div>

                </>
              </div>
          }
        </Col>
      </Row>
    </div>
  )
}
