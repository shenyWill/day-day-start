import React from 'react';
import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import App from './App';
import Toggle from './Toggle';
import useCounter from './hooks/useCounter';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('test');
  console.log(111111, linkElement);
  expect(linkElement).toBeInTheDocument();
});


test('toggle', async () => {
  const { container } = render(<Toggle/>)
  expect(container.querySelector('p')?.textContent).toBe('close');
  act(() => fireEvent.click(container.querySelector('button')!));
  await waitFor(() => expect(container.querySelector('p')?.textContent).toBe('open'), {
    timeout: 3000
  });
});

test('useCounter', async () => {
  const hook = renderHook(() => useCounter(0));

  const [count, increment, decrement] = hook.result.current;

  act(() => {
    increment(2)
  });

  expect(hook.result.current[0]).toBe(2);

  act(() => {
    decrement(3);
  });

  expect(hook.result.current[0]).toBe(-1);

  hook.unmount();
})

