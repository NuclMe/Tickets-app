import { all, fork } from 'redux-saga/effects';
// import { ticketSaga } from './ducks/tickets';
import { ticketSaga } from './ducks/tickets/tickets';

export function* rootSaga() {
  yield all([fork(ticketSaga)]);
}
