import { all, fork } from 'redux-saga/effects';
import { ticketSaga } from '../redux/sagas/ticketSaga';

export function* rootSaga() {
  yield all([fork(ticketSaga)]);
}
