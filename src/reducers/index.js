import { combineReducers } from 'redux';
import users from './userSlice';

const rootReducer = combineReducers({
    users
  });

  export default rootReducer;