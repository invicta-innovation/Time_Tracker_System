import {GET_LEAVES,GET_EMP_LEAVES,NEW_LEAVE,SHOW_ERROR_MESSAGE,COUNT_DAY} from "../_constants/types"
import {API_BASE_URL} from '../_constants/index'
import axios from 'axios';

export const getNumberOfDays=(startdate,enddate)=>dispatch=>{
    let startDate=new Date(startdate);
    let endDate=new Date(enddate);
    let diffInmilliseconds=endDate.getTime()-startDate.getTime();
    let noOfDays=diffInmilliseconds/(24*60*60*1000) + 1;
    dispatch({
        type: COUNT_DAY,
        payload:noOfDays
      })
}
export const fetchLeaveRequests= () => dispatch => {
    axios.get(API_BASE_URL+"/leaveRequest").then((res) => dispatch({
       type:GET_LEAVES,
       leaveRequestList:res.data
    }));
}
export const fetchLeaveRequestsByUser= (id) => dispatch => {
    axios.get(`${API_BASE_URL}/leaveRequest/user/${id}`).then((res) => dispatch({
       type:GET_EMP_LEAVES,
       empLeaveRequestList:res.data
    }));
}

export const CreateLeaveRequest= (leave,userid) => dispatch => {
    axios.post(`${API_BASE_URL}/leaveRequest/requesteduser/${userid}`,leave).then((res) =>
    dispatch({
       type:NEW_LEAVE,
    }))
}