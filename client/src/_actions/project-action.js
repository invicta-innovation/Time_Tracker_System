import {GET_PROJECT,SHOW_MODAL_PROJECT} from '../_constants/types'

export const fetchProject= () => dispatch =>{
    dispatch({
        type:GET_PROJECT,
        payload:[
            {id:1,projectName:'HRM',startedDate:'05/12/2018',finishedDate:'07/11/2019',description:'hrm',projectStatus:'closed'},
            
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