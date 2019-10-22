import { GET_TASK } from "../../_constants/types";

const initialState = {
    tasks:[],
    task:{}
  };

export default function(state = initialState,action) {
    switch(action.type){
        case GET_TASK:
            return{
                ...state,
                tasks:action.payload
            };
        default: return state;
    }
}