import {
  GET_ROLE,
  ADD_ROLE,
  DELETE_ROLE,
  UPDATE_ROLE,
  SHOW_MODAL_ROLE,
  SHOW_ERROR_MESSAGE
} from "../_constants/types";
import axios from "axios";
import { API_BASE_URL } from "../_constants/index";

export const fetchRole = () => dispatch => {
  axios.get(API_BASE_URL + "/role").then(res =>
    dispatch({
      type: GET_ROLE,
      roleList: res.data
    })
  );
};
export const addRole = role => dispatch => {
  axios.post(`${API_BASE_URL}/role`, role).then(res =>
    dispatch({
      type: ADD_ROLE,
      roleObj: res.data
    })
  ).catch(err => dispatch({
    type: SHOW_ERROR_MESSAGE,
    payload: err.response.data
  }));
};

export const deleteRole = id => dispatch => {
  axios.delete(`${API_BASE_URL}/role/${id}`).then(res =>
    dispatch({
      type: DELETE_ROLE,
      payload: id
    })
  );
};

export const updateRole = role => dispatch => {
  axios.put(`${API_BASE_URL}/role/${role.id}`, role)
    .then(res =>
    dispatch({
      type: UPDATE_ROLE,
      payload: res.data
    }) 
  ).catch(err => dispatch({
    type: SHOW_ERROR_MESSAGE,
    payload: err.response.data
  }));
};

export const showModal = (modaldata, id) => dispatch => {
  if (modaldata.action == "ADD") {
    dispatch({
      type: SHOW_MODAL_ROLE,
      modaldata: modaldata,
    });
  } else if (modaldata.action == "EDIT") {
    axios.get(`${API_BASE_URL}/role/${id}`).then(res =>
      dispatch({
        type: SHOW_MODAL_ROLE,
        modaldata: modaldata,
        payload: res.data
      })
    );
  }
};
