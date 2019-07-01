import {combineReducers} from 'redux';
import spinnerReducer from './spinner';
import listReducer from 'reducers/list';

export default combineReducers({
  spinner: spinnerReducer,
  list: listReducer,
})
