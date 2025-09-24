import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Flights } from '../Flights';

const renderWithRouter = (initialEntries = ['/cheapest']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Flights />
    </MemoryRouter>
  );
};

describe('Flights Component', () => {
  it('renders the Flights component via snapshot', () => {
    const { container } = renderWithRouter(['/cheapest']);

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render both tab buttons', () => {
    renderWithRouter();

    expect(screen.getByText('САМЫЙ ДЕШЕВЫЙ')).toBeInTheDocument();
    expect(screen.getByText('САМЫЙ БЫСТРЫЙ')).toBeInTheDocument();
  });

  it('should have "САМЫЙ ДЕШЕВЫЙ" tab active when on /cheapest route', () => {
    renderWithRouter(['/cheapest']);

    const cheapestTab = screen.getByRole('tab', { name: 'САМЫЙ ДЕШЕВЫЙ' });
    const fastestTab = screen.getByRole('tab', { name: 'САМЫЙ БЫСТРЫЙ' });

    expect(cheapestTab).toHaveAttribute('aria-selected', 'true');
    expect(fastestTab).toHaveAttribute('aria-selected', 'false');
  });

  it('should have "САМЫЙ БЫСТРЫЙ" tab active when on /fastest route', () => {
    renderWithRouter(['/fastest']);

    const cheapestTab = screen.getByRole('tab', { name: 'САМЫЙ ДЕШЕВЫЙ' });
    const fastestTab = screen.getByRole('tab', { name: 'САМЫЙ БЫСТРЫЙ' });

    expect(cheapestTab).toHaveAttribute('aria-selected', 'false');
    expect(fastestTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should navigate to /cheapest when "САМЫЙ ДЕШЕВЫЙ" tab is clicked', () => {
    renderWithRouter(['/fastest']);

    const cheapestTab = screen.getByRole('tab', { name: 'САМЫЙ ДЕШЕВЫЙ' });
    fireEvent.click(cheapestTab);

    expect(cheapestTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should navigate to /fastest when "САМЫЙ БЫСТРЫЙ" tab is clicked', () => {
    renderWithRouter(['/cheapest']);

    const fastestTab = screen.getByRole('tab', { name: 'САМЫЙ БЫСТРЫЙ' });
    fireEvent.click(fastestTab);

    expect(fastestTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should default to cheapest tab when on root route', () => {
    renderWithRouter(['/']);

    const cheapestTab = screen.getByRole('tab', { name: 'САМЫЙ ДЕШЕВЫЙ' });
    const fastestTab = screen.getByRole('tab', { name: 'САМЫЙ БЫСТРЫЙ' });

    expect(cheapestTab).toHaveAttribute('aria-selected', 'true');
    expect(fastestTab).toHaveAttribute('aria-selected', 'false');
  });
});
