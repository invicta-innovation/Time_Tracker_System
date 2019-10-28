import {GET_COMPANY,SHOW_MODAL_COMPANY,ADD_COMPANY,DELETE_COMPANY, UPDATE_COMPANY,SHOW_ERROR_MESSAGE} from '../../_constants/types'
import Axios from 'axios';
import {API_COMPANY_BASE_URL } from '../../_constants/index';

export const fetchCompany= () => dispatch =>{
  Axios.get(`${API_COMPANY_BASE_URL}/company`).then(res=>
  dispatch({
    type:GET_COMPANY,
    payload:res.data
}))
}

export const addCompany = company => dispatch => {
  Axios
    .post(`${API_COMPANY_BASE_URL}/company`, company)
    .then(res =>
      dispatch({
        type: ADD_COMPANY,
        companyObj: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
    );
    };

    export const updateCompany = company => dispatch => {
      Axios
        .put(`${API_COMPANY_BASE_URL}/company/${company.id}`, company)
        .then(res =>
          dispatch({
            type: UPDATE_COMPANY,
            payload: res.data
          })
        ).catch(err=>
          dispatch({
            type:SHOW_ERROR_MESSAGE,
            payload:err.response.data
          })
        );
    };

export const showModal = (modaldata,id) =>dispatch=> {
    if(modaldata.action==='ADD'){
    dispatch({
        type: SHOW_MODAL_COMPANY,
        modaldata: modaldata,
       payload:{}
      })
    }
    else if(modaldata.action==='EDIT'){
      Axios.get(`${API_COMPANY_BASE_URL}/company/${id}`).then(res =>
      dispatch({
          type: SHOW_MODAL_COMPANY,
          modaldata: modaldata,
          payload:res.data
        })
      );
      }
    }