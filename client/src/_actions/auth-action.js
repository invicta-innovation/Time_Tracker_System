import axios from "axios";
import { API_BASE_URL } from "../_constants/index";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../_constants/types";
import authService from '../_utils/auth-service';

const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload:data
    }
}

const loginFailure = (errors) => {
    return {
        type: LOGIN_FAILURE,
        errors
    }
}

export const checkAuthState = () => {
    return dispatch => {
        if (authService.isAuthenticated()) {
            let token1 =authService.getToken();
                let decodetoken=authService.decode(token1);
                dispatch(loginSuccess(decodetoken));
        }
    }
}

export const login = (userData) => {
    return dispatch => {
        return axios.post(`${API_BASE_URL}/auth/signin`, userData)
            .then(res => res.data)
            .then(token => {
                //localStorage.setItem('auth_token',token.accessToken);
                authService.saveToken(token);
                let token1 =authService.getToken();
                let decodetoken=authService.decode(token1);
                dispatch(loginSuccess(decodetoken));
            })
            .catch(({ response }) => {
                dispatch(loginFailure(response.data.message));
            })
    }
}


export const logout = () => {
    authService.invalidateUser();
    return {
        type: LOGOUT
    }
}