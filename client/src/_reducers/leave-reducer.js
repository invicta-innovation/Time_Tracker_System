import {GET_LEAVES,GET_EMP_LEAVES,NEW_LEAVE,SHOW_ERROR_MESSAGE,COUNT_DAY} from "../_constants/types"

const initialState = {
  pending: false,
  leaveRequests: [],
  newLeaveRequest:{},
  empLeaveRequests:[],
  errors: {},
  message:'',
  noOfDay:null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEAVES:
      return {
        ...state,
        leaveRequests:action.leaveRequestList
      };
    case GET_EMP_LEAVES:
      return {
        ...state,
        empLeaveRequests:action.empLeaveRequestList
      };
    case NEW_LEAVE:
      return {
        ...state,
          message:"LEAVE_ADDED"
      };
   case COUNT_DAY:
      return {
        ...state,
        noOfDay:action.payload
      }
  case SHOW_ERROR_MESSAGE :
    return {
      ...state,
      show:true,
      errors:action.payload
    }
    default:
      return state;
  }
}
