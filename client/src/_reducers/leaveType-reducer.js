import {
  GET_LEAVE_TYPE,
  SHOW_MODAL_LEAVE_TYPE,
  ADD_LEAVE_TYPE,
  UPDATE_LEAVE_TYPE,
  DELETE_LEAVE_TYPE,
  SHOW_ERROR_MESSAGE,
  CHECK_LEAVE_TYPE_AVAILABILITY
} from "../_constants/types";

const initialState = {
  modaldata: {},
  leaveTypes: [],
  leaveType: {},
  errors:null,
  messages:null,
  
};

export default function leaveTypeReducer(state = initialState, action) {

  switch (action.type) {
    case GET_LEAVE_TYPE:
      return {
        ...state,
        leaveTypes: action.leaveTypeList
      };
    case SHOW_MODAL_LEAVE_TYPE:
      return {
        ...state,
        errors:null,
        messages:null,
        modaldata: action.modaldata,
        leaveType: action.payload
      };
    case ADD_LEAVE_TYPE:
      return {
        ...state,
        errors:null,
        messages:'LEAVE_TYPE_ADDED',
        modaldata:{show:false},
        leaveTypes: state.leaveTypes.concat(action.leaveTypeObj)
      };
    case UPDATE_LEAVE_TYPE:
      return {
        ...state,
        modaldata:{show:false},
        messages:'LEAVE_TYPE_EDITED',
        errors:null,
        leaveTypes: state.leaveTypes.map(leaveType => {
          if (leaveType.id == action.payload.id) {
            return action.payload;
          } else {
            return leaveType;
          }
        })
      };
      case DELETE_LEAVE_TYPE:
          return {
            ...state,
            messages:'LEAVE_TYPE_DELETED',
            leaveTypes:state.leaveTypes.filter(leaveType=>leaveType.id!==action.payload)
        }
        case SHOW_ERROR_MESSAGE:
          return{
            ...state,
            show:true,
            errors: action.payload
          }
          case CHECK_LEAVE_TYPE_AVAILABILITY:
            return{
              ...state,
              errors:action.payload
            }

    default:
      return state;
  }
}
