import axios from "axios";
import { BASE_URL } from "../BaseUrl";
import {
 GET_QUESTIONS_REQUEST,
 QUESTIONS_REQUEST_SUCCESS,
 QUESTIONS_REQUEST_FAIL
} from "../constants/quizConstant";


export const listOfQuestions = () => async (dispatch) => {

    try {
      dispatch({ type: GET_QUESTIONS_REQUEST });

      const { data } = await axios.get(`${BASE_URL}/api/questions`);

      dispatch({
        type: QUESTIONS_REQUEST_SUCCESS,
        payload: data.result[0],
      });
    } catch (error) {
      dispatch({
        type: QUESTIONS_REQUEST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

