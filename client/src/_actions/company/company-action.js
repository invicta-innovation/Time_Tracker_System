import {GET_COMPANY,SHOW_MODAL_COMPANY} from '../../_constants/types'
import Axios from 'axios'

export const fetchCompany= () => dispatch =>{
  Axios.get("http://localhost:4000/company").then(res=>
  dispatch({
    type:GET_COMPANY,
    payload:res.data
}))
    
}

export const showModal = (modaldata,companyObj) =>dispatch=> {
    if(modaldata.action==='ADD'){
    dispatch({
        type: SHOW_MODAL_COMPANY,
        modaldata: modaldata,
       payload:{}
      })
    }
    else if(modaldata.action==='EDIT'){
      dispatch({
          type: SHOW_MODAL_COMPANY,
          modaldata: modaldata,
          payload:companyObj
        })
      }
    }