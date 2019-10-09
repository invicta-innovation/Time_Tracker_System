import {
  GET_DESIGNATION,
  ADD_DESIGNATION,
  DELETE_DESIGNATION,
  UPDATE_DESIGNATION,
  SHOW_MODAL_DESIGNATION,
  SHOW_ERROR_MESSAGE
} from "../_constants/types";

const initialState = {
  modaldata: {},
  designations: [],
  designation: {},
  errors: {},
  messages:{}
};

export default function (state = initialState, action) {
  console.log(action.designationList);
  switch (action.type) {
    case GET_DESIGNATION:
      return {
        ...state,
        designations: action.designationList
      };
    case SHOW_MODAL_DESIGNATION:
      return {
        ...state,
        errors:{},
        modaldata: action.modaldata,
        designation: action.payload,
        messages:{}
      };
    case ADD_DESIGNATION:
      return {
        ...state,
        errors:{},
        messages:'DESIGNATION_ADDED',
        modaldata:{show:false},
        designations: state.designations.concat(action.designationObj)
      };
    case UPDATE_DESIGNATION:
      return {
        ...state,
        modaldata:{show:false},
        messages:'DESIGNATION_EDITED',
        errors:{},
        designations: state.designations.map(designation => {
          if (designation.id == action.payload.id) {
            return action.payload;
          } else {
            return designation;
          }
        })
      };
    case DELETE_DESIGNATION:
      return {
        ...state,
        messages:'DESIGNATION_TYPE_DELETED',
        designations: state.designations.filter(
          designation => designation.id !== action.payload
        )
      };

    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        show: true,
        errors: action.payload
      };

    default:
      return state;
  }
}
