import {GET_COMPANY,ADD_COMPANY,SHOW_MODAL_COMPANY,UPDATE_COMPANY} from '../../_constants/types'
const initialState = {
    companies:[],
    modaldata:{},
    company:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_COMPANY:
        return {
          ...state,
          companies:action.payload
        };
      case ADD_COMPANY:
        return {
          ...state,
          companies:state.companies.concat(action.payload),
          modaldata:{show:false}
        };
        case UPDATE_COMPANY:
        return {
          ...state,
          companies:state.companies.map(company=>{
            if(company.id===action.payload.id) 
            {
            return action.payload;
            }else{
              return company;
            }}),
          modaldata:{show:false}
        };
        case SHOW_MODAL_COMPANY:
            return {
              ...state,
              modaldata:action.modaldata,
              company:action.payload
            };
      default:
        return state;
    }
  }