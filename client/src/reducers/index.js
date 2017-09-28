import { combineReducers } from 'redux';
import sketchesReducer from './sketches_reducer';

const rootReducer = combineReducers({
  sketches: sketchesReducer
});

export default rootReducer;
