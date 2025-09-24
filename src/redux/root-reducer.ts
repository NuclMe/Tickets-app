import { combineReducers } from 'redux';
import { reducer as ticketsReducer } from './ducks/tickets/tickets';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
