import { combineReducers } from "redux";
import roleReducer from "./role-reducer";
import leaveHistoryReducer from "./leave-history-reducer";
import leaveReducer from "./leave-reducer";
import userReducer from "./user-reducer";
import leaveTypeReducer from'./leaveType-reducer';
import recuritmentTypeReducer from './employee/recuitment-type-reducer';
import designationReducer from './employee/designation-reducer';
import lieuLeaveReducer from'./lieuLeaveRequest-reducer';
import {authReducer} from'./auth-reducer';
import leaveAllocationReducer from "./leave-allocation-reducer";

import companyReducer from "./company/company-reducer";
import projectReducer from "./company/project-reducer";
import recruitmentReducer from "./employee/recruitment-reducer";
import taskReducer from "./time_tracker/task-reducer";

export default combineReducers({
  roleStore: roleReducer,
  // leave: leaveHistoryReducer,
  userStore:userReducer,
  leaveTypeStore: leaveTypeReducer,
  recuitmentTypeStore: recuritmentTypeReducer,
  designationStore:designationReducer,
  leaveStore: leaveReducer,
  lieuLeaveRequestStore:lieuLeaveReducer,
  authStore:authReducer,
  leaveAllocationStore:leaveAllocationReducer,

  companyStore:companyReducer,
  projectStore:projectReducer,
  recruitmentStore:recruitmentReducer,

  taskStore:taskReducer,
});
