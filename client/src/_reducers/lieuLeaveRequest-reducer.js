import { ADD_LIEU_LEAVE, GET_LIEU_LEAVE, SHOW_ERROR_MESSAGE } from "../_constants/types";


const initialState = {
    modaldata: {},
    lieuLeaveRequests: [],
    lieuLeaveRequest: {},
    errors: {},
    messages: null,
};
export default function lieuLeaveRequestReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIEU_LEAVE:
            return {
                ...state,
                errors: null,
                lieuLeaveRequests: state.lieuLeaveRequests.concat(action.lieuLeaveRequestObj),
                lieuLeaveRequest:action.lieuLeaveRequestObj
            };
            case GET_LIEU_LEAVE:
                return{
                    ...state,
                    lieuLeaveRequests:action.lieuLeaveList
                };
                case SHOW_ERROR_MESSAGE:
                    return{
                        ...state,
                        errors: action.payload
                    }
        default:
            return state;
    }
}
