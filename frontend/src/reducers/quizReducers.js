import {
    GET_QUESTIONS_REQUEST,
    QUESTIONS_REQUEST_SUCCESS,
    QUESTIONS_REQUEST_FAIL

  } from "../constants/quizConstant";
  
  export const quizQuestionsReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_QUESTIONS_REQUEST:
        return { loading: true };
      case QUESTIONS_REQUEST_SUCCESS:
        return { loading: false, quizQuestions: action.payload };
      case QUESTIONS_REQUEST_FAIL:
        return {};
      default:
        return state;
    }
  };
 