import { createSelector } from 'reselect';
import type { RootState } from '../../root-reducer';
import { types } from './types';
import type { ITicket } from '../../../types';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const initialState = {
  tickets: [],
  loading: false,
  error: null,
  selectedTransfer: 'all',
};

const ticketsSelector = (state: RootState) => state.tickets.tickets;
const transferSelector = (state: RootState) => state.tickets.selectedTransfer;

export const selectFilteredTickets = createSelector(
  [ticketsSelector, transferSelector],
  (tickets: ITicket[], selectedTransfer: string) => {
    if (selectedTransfer === 'all') return tickets;
    return tickets.filter((ticket: ITicket) =>
      ticket.segments.every(
        (seg) => seg.stops.length === Number(selectedTransfer)
      )
    );
  }
);

export const fetchTickets = () => ({ type: types.FETCH_TICKETS });
export const fetchTicketsSuccess = (tickets: ITicket[]) => ({
  type: types.FETCH_TICKETS_SUCCESS,
  payload: tickets,
});
export const fetchTicketsError = (error: string) => ({
  type: types.FETCH_TICKETS_ERROR,
  error,
});
export const setTransferFilter = (filter: number | string) => ({
  type: types.SET_TRANSFER_FILTER,
  payload: filter,
});

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_TICKETS:
      return { ...state, loading: true, error: null };
    case types.FETCH_TICKETS_SUCCESS:
      return { ...state, loading: false, tickets: action.payload };
    case types.FETCH_TICKETS_ERROR:
      return { ...state, loading: false, error: action.error };
    case types.SET_TRANSFER_FILTER:
      return { ...state, selectedTransfer: action.payload };
    default:
      return state;
  }
};
function* fetchTicketsSaga(): Generator {
  try {
    let allTickets: ITicket[] = [];
    let stop = false;
    let retries = 0;
    const maxRetries = 10;

    while (!stop && retries < maxRetries) {
      try {
        const ticketsRes = yield call(axios.get, '/mock-api/tickets.json');
        allTickets = allTickets.concat(ticketsRes.data.tickets);
        stop = ticketsRes.data.stop;
      } catch (err) {
        console.error(err);
        retries += 1;
        yield call(() => new Promise((res) => setTimeout(res, 500)));
        continue;
      }
    }

    yield put(fetchTicketsSuccess(allTickets));
  } catch (error: any) {
    yield put(fetchTicketsError(error.message));
  }
}

export function* ticketSaga() {
  yield takeLatest(types.FETCH_TICKETS, fetchTicketsSaga);
}
