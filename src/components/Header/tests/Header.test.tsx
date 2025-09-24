import { render } from '@testing-library/react';

import { Header } from '../Header';

describe('Header', () => {
  it('renders the Header component via snapshot', () => {
    render(<Header />);

    expect(Header).toMatchSnapshot();
  });
});
