import { GET_LEAVE_TYPE, SHOW_MODAL_LEAVE_TYPE, ADD_LEAVE_TYPE, UPDATE_LEAVE_TYPE, DELETE_LEAVE_TYPE,SHOW_ERROR_MESSAGE, CHECK_LEAVE_TYPE_AVAILABILITY} from "../_constants/types";
import axios from 'axios';
import { API_BASE_URL } from "../_constants/index";

export const getLeaveType = () => dispatch => {
  axios.get(`${API_BASE_URL}/leaveType`).then((res) => dispatch({
    type: GET_LEAVE_TYPE,
    leaveTypeList: res.data
  }));
}
export const addLeaveType = (leaveType) => dispatch => {

  axios.post(`${API_BASE_URL}/leaveType`, leaveType).then(res =>
    dispatch({
      type: ADD_LEAVE_TYPE,
      leaveTypeObj: res.data
    })
  ).catch(err =>
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data
    })
  );
};


export const updateLeaveType = (leaveType) => dispatch => {

  axios.put(`${API_BASE_URL}/leaveType/${leaveType.id}`, leaveType).then(res =>
    dispatch({
      type: UPDATE_LEAVE_TYPE,
      payload: res.data
    })
  ).catch(err =>
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data
    })
  );
};


export const deleteLeaveType = (id) => dispatch => {

  axios.delete(`${API_BASE_URL}/leaveType/${id}`).then(res =>
    dispatch({
      type: DELETE_LEAVE_TYPE,
      payload: id
    })
  );
};

//check Leave type Availability API
export const checkLeaveTypeAvailability = (leaveType) => dispatch => {
  
  axios.get(`${API_BASE_URL}/leaveType/checkAvailability?leaveType=${leaveType}`).catch(err =>
   // console.log(err.response.data)
    dispatch({
      type: CHECK_LEAVE_TYPE_AVAILABILITY,
      payload: err.response.data
    })
  );
};


export const showModal = (modaldata, id) => dispatch => {
  if (modaldata.action == 'ADD') {
    dispatch({
      type: SHOW_MODAL_LEAVE_TYPE,
      modaldata: modaldata,

    })
  } else if (modaldata.action == 'EDIT') {
    axios.get(`${API_BASE_URL}/leaveType/${id}`).then(res =>
      dispatch({
        type: SHOW_MODAL_LEAVE_TYPE,
        modaldata: modaldata,
        payload: res.data
      })
    );
  }

};