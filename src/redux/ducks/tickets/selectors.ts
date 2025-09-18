import { createSelector } from 'reselect';

const ticketsSelector = (state) => state.ticket.tickets;
const transferSelector = (state) => state.ticket.selectedTransfer;

export const selectFilteredTickets = createSelector(
  [ticketsSelector, transferSelector],
  (tickets, selectedTransfer) => {
    if (selectedTransfer === 'all') return tickets;
    return tickets.filter((ticket) =>
      ticket.segments.every((seg) => seg.stops.length === selectedTransfer)
    );
  }
);
