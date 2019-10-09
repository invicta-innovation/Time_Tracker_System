import {
  GET_LEAVE_ALLOCATION,
  ADD_LEAVE_ALLOCATION,
  DELETE_LEAVE_ALLOCATION,
  UPDATE_LEAVE_ALLOCATION,
  SHOW_ERROR_MESSAGE
} from "../_constants/types";
import axios from "axios";
import { API_BASE_URL } from "../_constants/index";

export const getLeaveAllocation = userid => dispatch => {
  axios
    .get(`${API_BASE_URL}/leavemanager/findbyUserId/${userid}`)
    .then(res =>
      dispatch({
        type: GET_LEAVE_ALLOCATION,
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

export const addLeaveAllocation = (leaveAllocation,userid) => dispatch => {
  axios
    .post(`${API_BASE_URL}/leavemanager/userid/${userid}`, leaveAllocation)
    .then(res =>
      dispatch({
        type: ADD_LEAVE_ALLOCATION,
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

export const deleteLeaveAllocation = id => dispatch => {
  axios.delete(`${API_BASE_URL}/leavemanager/${id}`).then(res =>
    dispatch({
      type: DELETE_LEAVE_ALLOCATION,
      payload: id
    })
  );
};

export const updateLeaveAllocation = (leaveAllocation,leavemanagerid) => dispatch => {
  axios
    .put(`${API_BASE_URL}/leavemanager/leavemanagerid/${leavemanagerid}`, leaveAllocation)
    .then(res =>
      dispatch({
        type: UPDATE_LEAVE_ALLOCATION,
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
