import {GET_RECRUITMENT,ADD_RECRUITMENT,SHOW_MODAL_RECRUITMENT,UPDATE_RECRUITMENT} from '../../_constants/types'
const initialState = {
    recruitments:[],
    modaldata:{},
    recruitment:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_RECRUITMENT:
        return {
          ...state,
          recruitments:action.payload
        };
      case ADD_RECRUITMENT:
        return {
          ...state,
          recruitments:state.recruitments.concat(action.payload),
          modaldata:{show:false}
        };
        case UPDATE_RECRUITMENT:
        return {
          ...state,
          recruitments:state.recruitments.map(recruitment=>{
            if(recruitment.id===action.payload.id) 
            {
            return action.payload;
            }else{
              return recruitment;
            }}),
          modaldata:{show:false}
        };
        case SHOW_MODAL_RECRUITMENT:
            return {
              ...state,
              modaldata:action.modaldata,
              recruitment:action.payload
            };
      default:
        return state;
    }
  }