import {
  GET_LEAVE_ALLOCATION,
  ADD_LEAVE_ALLOCATION,
  DELETE_LEAVE_ALLOCATION,
  UPDATE_LEAVE_ALLOCATION,
  SHOW_ERROR_MESSAGE
} from "../_constants/types";

const initialState = {
  leaveAllocations: [],
 };

export default function(state = initialState, action) {
 
  switch (action.type) {
    case GET_LEAVE_ALLOCATION:
      return {
        ...state,
        leaveAllocations:action.payload
      };
    case ADD_LEAVE_ALLOCATION:
      return {
        ...state,
        leaveAllocations: state.leaveAllocations.concat(action.payload)
      };
      case DELETE_LEAVE_ALLOCATION:
          return {
            ...state,
            leaveAllocations:state.leaveAllocations.filter(leaveAllocation=>leaveAllocation.id!==action.payload)
        };
        case UPDATE_LEAVE_ALLOCATION:
            return {
              ...state,
              errors:{},
              leaveAllocations: state.leaveAllocations.map(leaveAllocation => {
                if (leaveAllocation.id == action.payload.id) {
                  return action.payload;
                } else {
                  return leaveAllocation;
                }
              })
            };
    default:
      return state;
  }
}

