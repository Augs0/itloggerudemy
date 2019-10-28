import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
    //state name for log
    log: logReducer
});