export const types = {
  FETCH_TICKETS: 'FETCH_TICKETS',
  FETCH_TICKETS_SUCCESS: 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR: 'FETCH_TICKETS_ERROR',
  SET_TRANSFER_FILTER: 'SET_TRANSFER_FILTER',
};

interface IAction {
  type: string;
  payload: any;
  error: string;
}
export type { IAction };
