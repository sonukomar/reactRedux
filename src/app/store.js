import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Reducers/Login.reducer';

export default configureStore({
  reducer: {
    LoginReducer: LoginReducer,
  },
});
