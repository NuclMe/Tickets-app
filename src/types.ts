interface ITicket {
  price: number;
  carrier: string;
  segments: Array<{
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
  }>;
}
interface ISegment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}
interface ISize {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}
interface IDevice {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
  desktopL: string;
}
interface ITransferOption {
  label: string;
  value: 'all' | 0 | 1 | 2 | 3;
}

export type { ITicket, ISegment, ISize, IDevice, ITransferOption };
