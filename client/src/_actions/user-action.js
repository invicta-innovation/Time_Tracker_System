import {GET_USER,NEW_USER,SHOW_MODAL_USER,EDIT_USER,USER_STATUS,SHOW_ERROR_MESSAGE} from "../_constants/types"
import {API_BASE_URL} from '../_constants/index'
import axios from 'axios';

export const fetchUsers= () => dispatch => {
    axios.get(API_BASE_URL+"/user").then((res) => dispatch({
       type:GET_USER,
       userList:res.data
    }));
}
export const validateUser= (user) => dispatch => {
  axios.post(API_BASE_URL+"/user/validate",user).catch(err=> 
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data
    })
    );
}
export const createUser= (user) => dispatch => {
    axios.post(API_BASE_URL+"/user",user).then((res) => dispatch({
       type:NEW_USER,
       userObj:res.data
    })).catch(err=>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
      );
}
export const updateUser= (user) => dispatch => {
    axios.put(API_BASE_URL+"/user/"+user.id,user).then((res) => dispatch({
       type:EDIT_USER,
       userObj:res.data
    })).catch(err=>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
      );
}

export const updateUserStatus= (user,status) => dispatch => {
    axios.delete(`${API_BASE_URL}/user/${user.id}/${status}`).then((res) => dispatch({
       type:USER_STATUS,
       userObj:res.data
    }));
}

export const showModal = (modaldata,user) =>dispatch=> {
    if(modaldata.action=='ADD'){
    dispatch({
        type: SHOW_MODAL_USER,
        modaldata: modaldata,

      })
    }
    else if(modaldata.action=='EDIT'){
      // axios.get(`${API_BASE_URL}/user/${id}`).then(res =>
      dispatch({
          type: SHOW_MODAL_USER,
          modaldata: modaldata,
          payload:user
        })
      // );
      }
    }
