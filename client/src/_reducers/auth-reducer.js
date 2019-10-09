import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../_constants/types";

const INITIAL_STATE = {
	// isAuth:false,
	isAuth:true,	
	//token
	errors:{},
	authData:{}
}
//token:action.token,:- may be the test
export const authReducer = (state = INITIAL_STATE, action) => {
	console.log(action.authData);
	switch (action.type) {
		case LOGIN_SUCCESS:
			return (Object.assign({}, state, {isAuth:true, errors:[],authData:action.payload}));
        case LOGIN_FAILURE:
			return Object.assign({}, state, {errors:action.errors});
			case LOGOUT:
					return Object.assign({}, state, {isAuth:false,authData:{}});
		default:
			return state;
	}
}