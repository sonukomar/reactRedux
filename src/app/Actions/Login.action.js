export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const LOAD_LOGIN_FORM = 'LOAD_LOGIN_FORM';
export const HANDLE_LOGIN_FORM_CHANGE = 'HANDLE_LOGIN_FORM_CHANGE';

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
debugger;
    return{
        type:"HANDLE_LOGIN_FORM_CHANGE",
        payload:payload
    }
}