import { GET_TASK,ADD_TASK, EDIT_TASK } from "../../_constants/types";

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
        case ADD_TASK:
                return{
                    ...state,
                    tasks:state.tasks.concat(action.payload)
                };
        case EDIT_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id == action.payload.id) {
                      return action.payload;
                    } else {
                      return task;
                    }
                  })
            }
        default: return state;
    }
}