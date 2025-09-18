import { types } from './types';

export const fetchTickets = () => ({ type: types.FETCH_TICKETS });
export const fetchTicketsSuccess = (tickets) => ({
  type: types.FETCH_TICKETS_SUCCESS,
  payload: tickets,
});
export const fetchTicketsError = (error) => ({
  type: types.FETCH_TICKETS_ERROR,
  error,
});

export const setTransferFilter = (filter) => ({
  type: types.SET_TRANSFER_FILTER,
  payload: filter,
});
