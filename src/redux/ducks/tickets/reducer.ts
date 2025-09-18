import { types } from './types';
const initialState = {
  tickets: [],
  loading: false,
  error: null,
  selectedTransfer: 'all',
};

export const reducer = (state = initialState, action) => {
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
