import { all, fork } from 'redux-saga/effects';
import { ticketSaga } from './ducks/tickets';

export function* rootSaga() {
  yield all([fork(ticketSaga)]);
}
