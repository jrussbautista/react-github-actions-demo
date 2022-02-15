import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';

test('render initial count', () => {
  const initialCount = 5;

  render(<Counter initialCount={initialCount} />);

  expect(
    screen.getByText(`Current Count: ${initialCount}`)
  ).toBeInTheDocument();
});

test('should increment count', () => {
  render(<Counter />);

  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  userEvent.click(incrementButton);

  expect(screen.getByText('Current Count: 1')).toBeInTheDocument();

  userEvent.click(incrementButton);

  expect(screen.getByText('Current Count: 2')).toBeInTheDocument();
});

test('should decrement count', () => {
  render(<Counter initialCount={5} />);

  const incrementButton = screen.getByRole('button', { name: 'Decrement' });
  userEvent.click(incrementButton);
  userEvent.click(incrementButton);

  expect(screen.getByText('Current Count: 3')).toBeInTheDocument();
});

test('should not get negative count on decrement', () => {
  render(<Counter initialCount={1} />);

  const incrementButton = screen.getByRole('button', { name: 'Decrement' });
  userEvent.click(incrementButton);
  userEvent.click(incrementButton);

  expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
});
