import { GET_RECUITMENT_TYPE, ADD_RECUITMENT_TYPE, UPDATE_RECUITMENT_TYPE, SHOW_ERROR_MESSAGE, SHOW_MODAL_RECUITMENT_TYPE, DELETE_RECUITMENT_TYPE } from '../_constants/types'

const initialState = {
  //show: false,
  modaldata:{},
  errors: {},
  recuitmentTypes: [],
  recuitmentType: {},
  messages:{}
};

export default function (state = initialState, action) {

  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        show: true,
        errors: action.payload
      }
    case SHOW_MODAL_RECUITMENT_TYPE:

      return {
        ...state,
        errors: {},
        messages:{},
        modaldata:action.modaldata,
        recuitmentType: action.payload
      }

    case GET_RECUITMENT_TYPE:
      return {
        ...state,
        recuitmentTypes: action.recuitmentTypeList
      }

    case ADD_RECUITMENT_TYPE:
      return {
        ...state,
        errors: {},
        messages:'RECUITMENT_TYPE_ADDED',
        modaldata:{show:false},
        recuitmentTypes: state.recuitmentTypes.concat(action.recuitmentTypeObj)
      }

    case DELETE_RECUITMENT_TYPE:
      return {
        ...state,
        messages:'RECUITMENT_TYPE_DELETED',
        recuitmentTypes: state.recuitmentTypes.filter(recuitmentType => recuitmentType.id !== action.payload)
      }
    case UPDATE_RECUITMENT_TYPE:
      return {
        ...state,
        modaldata:{show: false},
        messages:'RECUITMENT_TYPE_EDITED',
        errors: {},
        //roles:state.roles.filter(role=>role.id!==action.payload.id).concat(action.payload)
        recuitmentTypes: state.recuitmentTypes.map(recuitmentType => {
          if (recuitmentType.id == action.payload.id) {
            return action.payload;
          } else {
            return recuitmentType;
          }
        })

      }
    default:
      return state;
  }
}


