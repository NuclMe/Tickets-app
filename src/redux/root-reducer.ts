import { combineReducers } from 'redux';
import { reducer } from './ducks/tickets/';

const rootReducer = combineReducers({
  ticket: reducer,
});

export default rootReducer;
