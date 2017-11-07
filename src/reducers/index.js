import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
import glifyReducer from './reducer_glify';
import formStateReducer from './reducer_formstate'; 
import toDoReducer from './reducer_todo'; 

const rootReducer = combineReducers({
  weather : weatherReducer,
  glify : glifyReducer,
  formStateReducer : formStateReducer,
  toDoReducer : toDoReducer
});

export default rootReducer;
