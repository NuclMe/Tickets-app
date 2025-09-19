export function getFlightTimeRange(date: string, duration: number) {
  const start = new Date(date);
  const end = new Date(start.getTime() + duration * 60000);
  const pad = (n: number) => n.toString().padStart(2, '0');
  const startStr = `${pad(start.getHours())}:${pad(start.getMinutes())}`;
  const endStr = `${pad(end.getHours())}:${pad(end.getMinutes())}`;
  return `${startStr} - ${endStr}`;
}

export function numberWithSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
