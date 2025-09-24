import { render } from '@testing-library/react';

import { Item } from '../Item';

import { mockData } from './mockData';

describe('Item', () => {
  it('renders the Item component via snapshot', () => {
    render(
      <Item key={1} price={14000} carrier="S7" segments={mockData.segments} />
    );

    expect(Item).toMatchSnapshot();
  });
});
