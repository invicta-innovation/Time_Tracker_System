import {GET_COMPANY,SHOW_MODAL_COMPANY} from '../../_constants/types'

export const fetchCompany= () => dispatch =>{
    dispatch({
        type:GET_COMPANY,
        payload:[
            {id:1,companyName:'mitra',telNo:'0110123456',email:'mitra@gmail.com',address:'Ratmalana'},
            {id:2,companyName:'virtusa',telNo:'0110123456',email:'virtusa@gmail.com',address:'Dematagoda'},
            {id:3,companyName:'axiata',telNo:'0110123456',email:'axiata@gmail.com',address:'Bambalapitty'}
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