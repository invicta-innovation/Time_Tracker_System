import {GET_PROJECT,SHOW_MODAL_PROJECT} from '../_constants/types'

export const fetchProject= () => dispatch =>{
    dispatch({
        type:GET_PROJECT,
        payload:[
            {id:1,project:'HRM'},
            {id:2,project:'DTS'},
            {id:3,project:'TRS'}
        ]
    })
}

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