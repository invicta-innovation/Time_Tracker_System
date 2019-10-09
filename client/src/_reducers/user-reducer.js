import {GET_USER,NEW_USER,EDIT_USER,USER_STATUS,SHOW_MODAL_USER,SHOW_ERROR_MESSAGE} from '../_constants/types'

const initialState ={
    users:[],
    user:{},
    modaldata:{},
    errors:{},
    message:{}
}

export default function(state=initialState,action){
    console.log(action.type)
    
    switch(action.type){
        case GET_USER:
           return{
               ...state,
               users:action.userList,
           }
           case NEW_USER:
            return{
                ...state,
                message:'USER_ADDED',
                user:action.userObj,
                modaldata:{show:false},
                users:state.users.concat(action.userObj)
            }
           
        case EDIT_USER:
            return{
              ...state,
              message:'USER_EDITED',
              // users:state.users.filter(user=>user.id!==action.payload.id).concat(action.payload)
              errors:null,
              modaldata:{show:false},
              users:state.users.map(user=>{
                if(user.id==action.userObj.id) 
                {
                return action.userObj;
                }else{
                  return user;
                }})
          }
          case USER_STATUS:
            return{
                ...state,
                users:state.users.map(user=>{
                  if(user.id==action.userObj.id) 
                  {
                  return action.userObj;
                  }else{
                    return user;
                  }})
            }
        case SHOW_MODAL_USER:
            console.log(action.payload)
        return {
        ...state,
        modaldata: action.modaldata,
        user: action.payload,
        errors:null,
        message:{}
      };
      case SHOW_ERROR_MESSAGE :
        return {
          ...state,
          show:true,
          errors:action.payload
        }
        default :
            return state
    }
}