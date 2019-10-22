import {
  GET_DESIGNATION,
  SHOW_MODAL_DESIGNATION,
} from "../../_constants/types";

const initialState = {
  modaldata: {},
  designations: [ ],
  designation: {},

};

export default function (state = initialState, action) {
  // console.log(action.designationList);
  switch (action.type) {
    case GET_DESIGNATION:
      return {
        ...state,
        designations: action.payload,
      };

    case SHOW_MODAL_DESIGNATION:
      return {
        ...state,
        modaldata: action.payload,
      };

    default:
      return state;
  }
}
