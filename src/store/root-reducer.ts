import { combineReducers } from 'redux';
import ticketReducer from '../redux/reducers/ticketReducer';

const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export default rootReducer;
