import { TicketActionTypes } from '../../store/actionTypes';

export const fetchTickets = () => ({ type: TicketActionTypes.FETCH_TICKETS });
export const fetchTicketsSuccess = (tickets) => ({
  type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
  payload: tickets,
});
export const fetchTicketsError = (error) => ({
  type: TicketActionTypes.FETCH_TICKETS_ERROR,
  error,
});
