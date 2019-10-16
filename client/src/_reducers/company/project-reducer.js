import {GET_PROJECT,ADD_PROJECT,SHOW_MODAL_PROJECT,UPDATE_PROJECT} from '../../_constants/types'
const initialState = {
    projects:[],
    modaldata:{},
    project:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PROJECT:
        return {
          ...state,
          projects:action.payload
        };
      case ADD_PROJECT:
        return {
          ...state,
          projects:state.projects.concat(action.payload),
          modaldata:{show:false}
        };
        case UPDATE_PROJECT:
        return {
          ...state,
          projects:state.projects.map(project=>{
            if(project.id===action.payload.id) 
            {
            return action.payload;
            }else{
              return project;
            }}),
          modaldata:{show:false}
        };
        case SHOW_MODAL_PROJECT:
            return {
              ...state,
              modaldata:action.modaldata,
              project:action.payload
            };
      default:
        return state;
    }
  }