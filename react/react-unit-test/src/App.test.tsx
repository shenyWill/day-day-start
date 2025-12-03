import React, { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Toggle from './toggle';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link2', () => {
  const { container } = render(<App />);
  const linkElement = container.querySelector('.App-link');
  expect(linkElement?.textContent).toMatch('Learn React');
})

test('toggle', async () => {
  const { container } = render(<Toggle />);
  expect(container.querySelector('span')?.textContent).toMatch('On');
  act(() => {
    fireEvent.click(container.querySelector('button')!);
  })
  // expect(container.querySelector('span')?.textContent).toMatch('Off');
  await waitFor(() => {
    expect(container.querySelector('span')?.textContent).toMatch('Off');
  }, {
    timeout: 3000,
  });
})