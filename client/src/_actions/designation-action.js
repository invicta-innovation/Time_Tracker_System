import {
  GET_DESIGNATION,
  ADD_DESIGNATION,
  DELETE_DESIGNATION,
  UPDATE_DESIGNATION,
  SHOW_MODAL_DESIGNATION,
  SHOW_ERROR_MESSAGE
} from "../_constants/types";
import axios from "axios";
import { API_BASE_URL } from "../_constants/index";

export const getDesignation = () => dispatch => {
  axios.get(API_BASE_URL+"/designation").then(res =>
    dispatch({
      type: GET_DESIGNATION,
      designationList: res.data
    })
  );
};
export const addDesignation = designation => dispatch => {
  axios.post(`${API_BASE_URL}/designation`, designation).then(res =>
    dispatch({
      type: ADD_DESIGNATION,
      designationObj: res.data
    })
  ).catch(err =>
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data
    })
  );
};

export const updateDesignation = designation => dispatch => {
  axios.put(`${API_BASE_URL}/designation/${designation.id}`, designation).then(res =>
    dispatch({
      type: UPDATE_DESIGNATION,
      payload: res.data
    })
  ).catch(err=>dispatch({
    type:SHOW_ERROR_MESSAGE,
    payload:err.response.data
  })
  );
};

export const deleteDesignation = id => dispatch => {
  axios.delete(`${API_BASE_URL}/designation/${id}`).then(res =>
    dispatch({
      type: DELETE_DESIGNATION,
      payload: id
    })
  ).catch(err=>dispatch({
    type:SHOW_ERROR_MESSAGE,
    payload:err.response.data
  })
  );
};

export const showModal = (modaldata, id) => dispatch => {
  if (modaldata.action == "ADD") {
    dispatch({
      type: SHOW_MODAL_DESIGNATION,
      modaldata: modaldata,
    });
  } else if (modaldata.action == "EDIT") {
    axios.get(`${API_BASE_URL}/designation/${id}`).then(res =>
      dispatch({
        type: SHOW_MODAL_DESIGNATION,
        modaldata: modaldata,
        payload: res.data
      })
    );
  }
};
