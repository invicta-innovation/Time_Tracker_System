import {
    GET_LEAVE_HISTORY
  } from "../_constants/types";
  
  const initialState={
    status:[
      {startDate:"2019-04-29",endDate:"2019-04-30",status:"Accepted",reason:"got to colombo"},
      {startDate:"2019-04-29",endDate:"2019-04-30",status:"Rejected",reason:"got to colombo"},
      {startDate:"2019-04-29",endDate:"2019-04-30",status:"Cancelled",reason:"got to colombo"},
      {startDate:"2019-04-29",endDate:"2019-04-30",status:"Pending",reason:"got to colombo"},
      {startDate:"2019-04-29",endDate:"2019-04-30",status:"Accepted",reason:"got to colombo"},
      {startDate:"2019-04-29",endDate:"2019-04-30",status:"Accepted",reason:"got to colombo"}
    ]
  };
  
  export default function(state = initialState, action) {
    switch (action.history) {
      case GET_LEAVE_HISTORY:
        return {
          ...state
        }
      default:
        return state;
    }
  };
  