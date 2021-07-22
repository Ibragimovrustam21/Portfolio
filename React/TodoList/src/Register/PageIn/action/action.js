import axios from "axios";
import { ADD_VALUE, ADD_VALUE_MODAL, AUTH_LOGOUT, AUTH_SUCCESS, CHANGE_USER, CLICK_CHANGE, DIV_CLOSE, DIV_CLOSE_MODULE_ADD, DIV_NAME, DIV_NAME_CLOSE, EDIT_VALUE_MODAL, INPUT_HOLAT, INPUT_REF, MODAL_ADD_ACTION, MODAL_ADD_ACTION_CHANGE, REGISTERED } from "../actionType/actionType";

export function AuthSign(email, password, isLogin,history) {
    return async dispatch => {
        const AuthData = {
            email,
            password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZWKGcoInK_wh1DUDS2dx1awYtU1JIK8k';

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZWKGcoInK_wh1DUDS2dx1awYtU1JIK8k'
        }
        const response = await axios.post(url, AuthData)
        const data = response.data;
        const experationDate = new Date(new Date().getTime() + data.expiresIn * 1000)// kirgan vaqtdan boshlab 1soatdan kgn token o`chadi.kgn biz yangi token olishimizga tugri keladi.1soatdan kgn biz avtomaticheskiy ciqib ketadigan funksiya qilishimiz kerak.

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('experationDate', experationDate)
        dispatch(authSuccess(data.idToken))
        dispatch(authLogout(data.expiresIn))
    }
}
export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(authSuccess(token))
        }
        else {
            dispatch(logout())
        }
    }
}
function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
export function authLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000);//time =3.6s
    }
}
export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('experationDate')
    return {
        type: AUTH_LOGOUT,
    }
}

export function addValue(value) {
    return {
        type: ADD_VALUE,
        value
    }
}
export function clickHandler() {
    return {
        type: CLICK_CHANGE,
    }
}
export function InputHolati(key) {
    return {
        type: INPUT_HOLAT,
        key
    }
}
//
export function divName(key) {
    return {
        type: DIV_NAME,
        key
    }
}
export function divClose(key) {
    return {
        type: DIV_CLOSE,
        key
    }
}
export function changeUser(key,changeUser) {
    return {
        type: CHANGE_USER,
        key,
        changeUser
    }
}
export function modalAddAction() {
    return {
        type: MODAL_ADD_ACTION,
    }
}
export function AddValueModal(valueName,valueDescription) {
    return {
        type: ADD_VALUE_MODAL,
        valueName,
        valueDescription
    }
}
//
export function divCloseModuleAdd(key) {
    return {
        type: DIV_CLOSE_MODULE_ADD,
        key
    }
}
export function editValue(valueName,valueDescription) {
    return {
        type: EDIT_VALUE_MODAL,
        valueName,
        valueDescription
    }
}
export function modalAddActionChange(key) {
    return {
        type: MODAL_ADD_ACTION_CHANGE,
        key
    }
}

