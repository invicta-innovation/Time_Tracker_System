import {GET_PROJECT,SHOW_MODAL_PROJECT,ADD_PROJECT,UPDATE_PROJECT,SHOW_ERROR_MESSAGE,DELETE_PROJECT} from '../../_constants/types'
import Axios from 'axios';
import {API_COMPANY_BASE_URL } from '../../_constants/index';

export const fetchProject= () => dispatch =>{
  Axios.get(`${API_COMPANY_BASE_URL}/projects`).then(res=>
    dispatch({
        type:GET_PROJECT,
        payload: res.data             
    }))
}

export const addProject = project => dispatch => {
  Axios
    .post(`${API_COMPANY_BASE_URL}/project`, project)
    .then(res =>
      dispatch({
        type: ADD_PROJECT,
        projectObj: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
    );
    };

export const showModal = (modaldata,projectObj) =>dispatch=> {
    if(modaldata.action==='ADD'){
    dispatch({
        type: SHOW_MODAL_PROJECT,
        modaldata: modaldata,
       payload:{}
      })
    }
    else if(modaldata.action==='EDIT'){
      dispatch({
          type: SHOW_MODAL_PROJECT,
          modaldata: modaldata,
          payload:projectObj
        })
      }
    }