import {GET_TESTS,SHOW_MODAL_TEST} from '../_constants/types'

export const fetchTests= () => dispatch =>{
    dispatch({
        type:GET_TESTS,
        payload:[
            {id:1,test:'test1'},
            {id:2,test:'test2'},
            {id:3,test:'test3'}
        ]
    })
}

export const showModal = (modaldata,testObj) =>dispatch=> {
    if(modaldata.action=='ADD'){
    dispatch({
        type: SHOW_MODAL_TEST,
        modaldata: modaldata,
       payload:{}
      })
    }
    else if(modaldata.action=='EDIT'){
      dispatch({
          type: SHOW_MODAL_TEST,
          modaldata: modaldata,
          payload:testObj
        })
      }
    }