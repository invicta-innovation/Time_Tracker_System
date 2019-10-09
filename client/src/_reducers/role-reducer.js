import { GET_ROLE ,ADD_ROLE,DELETE_ROLE,UPDATE_ROLE,SHOW_MODAL_ROLE,SHOW_ERROR_MESSAGE} from "../_constants/types";

const initialState = {
  modaldata:{},
  errors:{},
  roles: [],
  role:{},
  messages:{},
}; 

export default function(state = initialState, action) {
 
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        show:true,
        errors: action.payload
      }

    case SHOW_MODAL_ROLE: 
      return {
        ...state,
        errors:{},
        messages:{},
        modaldata:action.modaldata,
        role:action.payload
        // show: action.modalshow,
        // modaltitle:action. modaltitle,
        // modalaction:action.modalaction,
        // role:action.payload
      }

    case GET_ROLE:
      return {
        ...state,
        roles: action.roleList
      }
    
      case ADD_ROLE:
        return{
          ...state,
          modaldata:{show:false},
          messages:'Role_ADDED',
          errors:{},
          roles:state.roles.concat(action.roleObj)
        }

        case DELETE_ROLE:
        return{
            ...state,
            messages:'ROLE_DELETED',
            roles:state.roles.filter(role=>role.id!==action.payload)
          }
          case UPDATE_ROLE:
            return{
              ...state,
              modaldata:{show:false},
              messages:'ROLE_UPDATED',
              roles:state.roles.map(role=>{
                if(role.id==action.payload.id) 
                {
                return action.payload;
                }else{
                  return role;
                }
                })
                
              
          }
    default:
      return state;
  }
}

// roles:state.roles.map(role=>{
//   if(role.id==action.payload.id){
//     role.roleName=action.payload.roleName
//   }
// }
