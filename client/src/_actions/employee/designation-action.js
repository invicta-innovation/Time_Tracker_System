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


export const showModal = (modalData, id) => dispatch => {
    // dispatch({
    //     type: SHOW_MODAL_DESIGNATION,
    //     payload: modalData
    // })

    if (modalData.action === "ADD") {
        dispatch({
            type: SHOW_MODAL_DESIGNATION,
            //   modaldata:modaldata,
            payload: modalData
        });
    } else if (modalData.action == "EDIT") {
        axios.get(`${API_EMPLOYEE_BASE_URL}/designation/${id}`).then(res =>
            dispatch({
                type: SHOW_MODAL_DESIGNATION,
                modaldata: modalData,
                payload: res.data
            })
        );
    }

}

export const addDesignation = (designationObj) => dispatch => {
    axios.post(`${API_EMPLOYEE_BASE_URL}/designation`, designationObj).then(res =>
        dispatch({
            type: ADD_DESIGNATION,
            payload: res.data
        })
    );
};

export const updateDesignation = (designationObj) => dispatch => {
    axios.put(`${API_EMPLOYEE_BASE_URL}/designation`, designationObj).then(res =>
        dispatch({
            type: ADD_DESIGNATION,
            payload: res.data
        })
    );
};