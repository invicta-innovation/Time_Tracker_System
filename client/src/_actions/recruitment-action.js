import {GET_RECRUITMENT,SHOW_MODAL_RECRUITMENT} from '../_constants/types'

export const fetchRecruitment= () => dispatch =>{
    dispatch({
        type:GET_RECRUITMENT,
        payload:[
          {id:1,employeeName:'xyz',companyName:"Invicta",startedDate:'2019-10-10',endDate:'2019-07-10',workRole:'SE',employeeStatus:'Temporary',designation:"SE"},
          {id:2,employeeName:'pqr',companyName:"Vertusa",startedDate:'2018-10-10',endDate:'2018-12-10',workRole:'ASE',employeeStatus:'Temporary',designation:"SE"},
            
        ]
    })
}

export const showModal = (modaldata,recruitmentObj) =>dispatch=> {
    if(modaldata.action==='ADD'){
    dispatch({
        type: SHOW_MODAL_RECRUITMENT,
        modaldata: modaldata,
       payload:{}
      })
    }
    else if(modaldata.action==='EDIT'){
      dispatch({
          type: SHOW_MODAL_RECRUITMENT,
          modaldata: modaldata,
          payload:recruitmentObj
        })
      }
    }