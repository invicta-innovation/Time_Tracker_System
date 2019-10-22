import { GET_DESIGNATION, SHOW_MODAL_DESIGNATION, ADD_DESIGNATION } from "../../_constants/types"
import axios from "axios";
import { API_EMPLOYEE_BASE_URL } from "../../_constants/index";

export const fetchDesignation = () => dispatch => {
    axios.get(`${API_EMPLOYEE_BASE_URL}/designation`).then(res =>
        dispatch({
            type: GET_DESIGNATION,
            payload: res.data
        })
    );
};


export const showModal = (modalData) => dispatch => {
    dispatch({
        type: SHOW_MODAL_DESIGNATION,
        payload: modalData
    })
}

export const addDesignation = (designationObj) => dispatch => {
    axios.post(`${API_EMPLOYEE_BASE_URL}/designation`, designationObj).then(res =>
        dispatch({
            type: ADD_DESIGNATION,
            payload: res.data
        })
    );
};