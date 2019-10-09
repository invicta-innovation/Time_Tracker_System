import axios from "axios";
import { API_BASE_URL } from "../_constants/index";
import { ADD_LIEU_LEAVE, SHOW_ERROR_MESSAGE, GET_LIEU_LEAVE } from "../_constants/types";

export const applyLieuLeaveRequest = lieuLeaveRequest => dispatch => {
    axios
        .post(`${API_BASE_URL}/lieuLeaveRequest`, lieuLeaveRequest)
        .then(res =>
            dispatch({
                type: ADD_LIEU_LEAVE,
                lieuLeaveRequestObj: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: SHOW_ERROR_MESSAGE,
                payload: err.response.data
            })
        );
};
//get All Lieu Leave 
export const getLieuLeave = () => dispatch => {
    axios.get(`${API_BASE_URL}/lieuLeaveRequest`).then((res) => dispatch({
      type: GET_LIEU_LEAVE,
      lieuLeaveList: res.data
    }));
  }