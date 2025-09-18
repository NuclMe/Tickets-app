import { TicketActionTypes } from '../../store/actionTypes';

const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case TicketActionTypes.FETCH_TICKETS:
      return { ...state, loading: true, error: null };
    case TicketActionTypes.FETCH_TICKETS_SUCCESS:
      return { ...state, loading: false, tickets: action.payload };
    case TicketActionTypes.FETCH_TICKETS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
