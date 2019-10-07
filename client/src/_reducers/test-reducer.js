import {GET_TESTS,NEW_TEST,SHOW_MODAL_TEST,EDIT_TEST} from '../_constants/types'
const initialState = {
    tests:[],
    modaldata:{},
    test:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_TESTS:
        return {
          ...state,
          tests:action.payload
        };
      case NEW_TEST:
        return {
          ...state,
          tests:state.tests.concat(action.payload),
          modaldata:{show:false}
        };
        case EDIT_TEST:
        return {
          ...state,
          tests:state.tests.map(test=>{
            if(test.id==action.payload.id) 
            {
            return action.payload;
            }else{
              return test;
            }}),
          modaldata:{show:false}
        };
        case SHOW_MODAL_TEST:
            return {
              ...state,
              modaldata:action.modaldata,
              test:action.payload
            };
      default:
        return state;
    }
  }