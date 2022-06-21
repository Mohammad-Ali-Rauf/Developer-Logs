import { combineReducers } from '@reduxjs/toolkit';
import logReducer from './logReducer';

export default combineReducers({
    log: logReducer
})