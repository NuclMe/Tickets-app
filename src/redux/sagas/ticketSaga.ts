import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { TicketActionTypes } from '../../store/actionTypes';
import {
  fetchTicketsSuccess,
  fetchTicketsError,
} from '../actions/ticketActions';

function* fetchTicketsSaga() {
  try {
    let allTickets = [];
    let stop = false;
    let retries = 0;
    const maxRetries = 10;

    while (!stop && retries < maxRetries) {
      try {
        const ticketsRes = yield call(axios.get, '/mock-api/tickets.json');
        allTickets = allTickets.concat(ticketsRes.data.tickets);
        stop = ticketsRes.data.stop;
      } catch (err) {
        retries += 1;
        yield call(() => new Promise((res) => setTimeout(res, 500)));
        continue;
      }
    }

    yield put(fetchTicketsSuccess(allTickets));
  } catch (error) {
    yield put(fetchTicketsError(error.message));
  }
}

export function* ticketSaga() {
  yield takeLatest(TicketActionTypes.FETCH_TICKETS, fetchTicketsSaga);
}
