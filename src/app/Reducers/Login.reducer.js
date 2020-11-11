import { USER_LOGGED_IN, LOAD_LOGIN_FORM,HANDLE_LOGIN_FORM_CHANGE } from '../Actions/Login.action';

const initialState = {
    isLoggedIn : false,
    form:{
        email : '',
        password:'',
        rememberMe:''
    }
}

export default function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case HANDLE_LOGIN_FORM_CHANGE:
            return {
                ...state,
                form:action.payload 
            };
        case USER_LOGGED_IN:
            return {...state};
        case LOAD_LOGIN_FORM:
            return {...state};
        default:
            return state;
    }
}