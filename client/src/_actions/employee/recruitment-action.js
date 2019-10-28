import {
  GET_RECRUITMENT,
  SHOW_MODAL_RECRUITMENT,ADD_RECRUITMENT,UPDATE_RECRUITMENT,SHOW_ERROR_MESSAGE
} from "../../_constants/types";
import { API_EMPLOYEE_BASE_URL } from "../../_constants/index";
import axios from "axios";
import recruitment from "../../views/employee/recruitment/recruitment";

export const fetchRecruitment = () => dispatch => {
  axios.get(API_EMPLOYEE_BASE_URL + "/recruitments").then(res =>
    dispatch({
      type: GET_RECRUITMENT,
      payload: res.data
    })
  );
};

export const addRecruitment = recuitment => dispatch => {
  axios
    .post(`${API_EMPLOYEE_BASE_URL}/recruitments`, recuitment)
    .then(res =>
      dispatch({
        type: ADD_RECRUITMENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
    );
};

export const updateRecruitment = recuitment => dispatch => {
  axios
    .put(`${API_EMPLOYEE_BASE_URL}/recruitments/${recruitment.id}`, recuitment)
    .then(res =>
      dispatch({
        type: UPDATE_RECRUITMENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
    );
};

export const showModal = (modaldata, recruitmentObj) => dispatch => {
  if (modaldata.action === "ADD") {
    dispatch({
      type: SHOW_MODAL_RECRUITMENT,
      modaldata: modaldata,
      payload: {}
    });
  } else if (modaldata.action === "EDIT") {
    dispatch({
      type: SHOW_MODAL_RECRUITMENT,
      modaldata: modaldata,
      payload: recruitmentObj
    });
  }
};

