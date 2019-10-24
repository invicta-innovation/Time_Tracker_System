import {
  GET_RECUITMENT_TYPE,
  ADD_RECUITMENT_TYPE,
  DELETE_RECUITMENT_TYPE,
  SHOW_MODAL_RECUITMENT_TYPE,
  SHOW_ERROR_MESSAGE,
  UPDATE_RECUITMENT_TYPE
} from "../../_constants/types";

import axios from "axios";
import { API_EMPLOYEE_BASE_URL } from "../../_constants/index";

export const fetchRecuitmentType = () => dispatch => {
  axios.get(`${API_EMPLOYEE_BASE_URL}/recruitment-types`).then(res =>
    dispatch({
      type: GET_RECUITMENT_TYPE,
      recuitmentTypeList: res.data
    })
  );
};

export const addRecuitmentType = recuitmentType => dispatch => {
  axios
    .post(`${API_EMPLOYEE_BASE_URL}/recruitment-types`, recuitmentType)
    .then(res =>
      dispatch({
        type: ADD_RECUITMENT_TYPE,
        recuitmentTypeObj: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
    );
};

export const deleteRecuitmentType = id => dispatch => {
  axios.delete(`${API_EMPLOYEE_BASE_URL}/recruitment-types/${id}`).then(res =>
    dispatch({
      type: DELETE_RECUITMENT_TYPE,
      payload: id
    })
  ).catch(err =>
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data
    })
  );
};

export const updateRecuitmentType = recuitmentType => dispatch => {
  axios
    .put(`${API_EMPLOYEE_BASE_URL}/recruitment-types/${recuitmentType.id}`, recuitmentType)
    .then(res =>
      dispatch({
        type: UPDATE_RECUITMENT_TYPE,
        payload: res.data
      })
    ).catch(err=>
      dispatch({
        type:SHOW_ERROR_MESSAGE,
        payload:err.response.data
      })
    );
};

export const showModal = (modaldata, id) => dispatch => {
  if (modaldata.action == "ADD") {
    dispatch({
      type: SHOW_MODAL_RECUITMENT_TYPE,
      modaldata:modaldata,
      payload:{}
    });
  } else if (modaldata.action == "EDIT") {
    axios.get(`${API_EMPLOYEE_BASE_URL}/recruitment-types/${id}`).then(res =>
      dispatch({
        type: SHOW_MODAL_RECUITMENT_TYPE,
        modaldata:modaldata,
        payload: res.data
      })
    );
  }
};
