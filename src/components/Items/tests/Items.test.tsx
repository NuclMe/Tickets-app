import { render } from '@testing-library/react';

import { Items } from '../Items';

import { mockData } from './mockData';

describe('Items', () => {
  it('renders the Items component via snapshot', () => {
    render(<Items items={mockData.tickets} />);

    expect(Items).toMatchSnapshot();
  });
});
