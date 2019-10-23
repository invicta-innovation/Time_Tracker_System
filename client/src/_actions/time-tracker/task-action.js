import { GET_TASK, ADD_TASK,EDIT_TASK } from "../../_constants/types"

export const fetchTasks=()=>dispatch=>{
    dispatch({
        type:GET_TASK,
        payload:[
            {
                id: 1,
                projectName: "leave system",
                taskName: "request leave",
                description: "apply for a leave",
                duration: 3.0
              },
              {
                id: 2,
                projectName: "leave",
                taskName: "request leave",
                description: "apply leave",
                duration: 2.5
              }
        ]
    })
}
export const createTask=(obj)=>dispatch=>{
  dispatch({
    type:ADD_TASK,
    payload:obj
  })}

  export const updateTask=(obj)=>dispatch=>{
    dispatch({
      type:EDIT_TASK,
      payload:obj
    })}