export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const LOAD_LOGIN_FORM = 'LOAD_LOGIN_FORM';
export const HANDLE_LOGIN_FORM_CHANGE = 'HANDLE_LOGIN_FORM_CHANGE';
export const LOGIN_FORM_SUBMITTED = 'LOGIN_FORM_SUBMITTED';

export function updateCounter(data) {
    return {
        type: USER_LOGGED_IN,
        payload: data,
    }
}

export function loadLoginForm(payload) {
    return {
        type:LOAD_LOGIN_FORM,
        payload:payload
    }
}

export function handleLoginFormChange(payload) {
    return {
        type:"HANDLE_LOGIN_FORM_CHANGE",
        payload:payload
    }
}

export function handleLoginFormSubmit(payload) {
    return {
        type: "LOGIN_FORM_SUBMITTED",
        payload:payload
    }
}