import styled from 'styled-components';
import type { ISize, IDevice } from './types';

const size: ISize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device: IDevice = {
  mobileS: `@media (max-width: ${size.mobileS})`,
  mobileM: `@media (max-width: ${size.mobileM})`,
  mobileL: `@media (max-width: ${size.mobileL})`,
  tablet: `@media (max-width: ${size.tablet})`,
  laptop: `@media (max-width: ${size.laptop})`,
  laptopL: `@media (max-width: ${size.laptopL})`,
  desktop: `@media (max-width: ${size.desktop})`,
  desktopL: `@media (max-width: ${size.desktop})`,
};

const colors = {
  grey: '#808080',
  blue: '#2196f3',
  primary: '#1976d2',
  lightBlue: '#00bfff',
  black: '#000',
  white: '#fff',
};

const fontSizes = {
  base: '16px',
  small: '12px',
  xs: '14px',
  large: '24px',
  medium: '18px',
};

const RootContainer = styled.div`
  padding: 2rem;
  background: #d3d3d3;
`;
const MainContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  ${device.tablet} {
    flex-direction: column;
  }
`;

export { RootContainer, MainContentWrapper, colors, fontSizes, device, size };
