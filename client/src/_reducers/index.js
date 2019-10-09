import { combineReducers } from "redux";
import roleReducer from "./role-reducer";
import leaveHistoryReducer from "./leave-history-reducer";
import leaveReducer from "./leave-reducer";
import userReducer from "./user-reducer";
import leaveTypeReducer from'./leaveType-reducer';
import recuitmentTypeReducer from './recuitment-type-reducer';
import designationReducer from './designation-reducer';
import lieuLeaveReducer from'./lieuLeaveRequest-reducer';
import {authReducer} from'./auth-reducer';
import leaveAllocationReducer from "./leave-allocation-reducer";
export default combineReducers({
  roleStore: roleReducer,
  // leave: leaveHistoryReducer,
  userStore:userReducer,
  leaveTypeStore: leaveTypeReducer,
  recuitmentTypeStore: recuitmentTypeReducer,
  designationStore:designationReducer,
  leaveStore: leaveReducer,
  lieuLeaveRequestStore:lieuLeaveReducer,
  authStore:authReducer,
  leaveAllocationStore:leaveAllocationReducer
});
