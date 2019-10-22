import { GET_DESIGNATION, SHOW_MODAL_DESIGNATION } from "../../_constants/types"

export const fetchDesignation = () => dispatch => {
    dispatch({
        type: GET_DESIGNATION,
        payload: [
            {
                id: 1,
                designation: "Admin"
            }
        ]
    })
}

export const showModal = (modalData) => dispatch => {
    dispatch({
        type: SHOW_MODAL_DESIGNATION,
        payload: modalData
    })
}