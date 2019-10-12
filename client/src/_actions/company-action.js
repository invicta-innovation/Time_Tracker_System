import {GET_COMPANY,SHOW_MODAL_COMPANY} from '../_constants/types'

export const fetchCompany= () => dispatch =>{
    dispatch({
        type:GET_COMPANY,
        payload:[
            {id:1,company:'mitra'},
            {id:2,company:'virtusa'},
            {id:3,company:'axiata'}
        ]
    })
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