import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
import glifyReducer from './reducer_glify';
 
const rootReducer = combineReducers({
  weather : weatherReducer,
  glify : glifyReducer
});

export default rootReducer;
