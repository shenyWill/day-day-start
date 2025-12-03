import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";
import { act } from "react";

test('useCounter', () => {
    const hook = renderHook(() => useCounter(0));
    const [count, increment, decrement] = hook.result.current;
    expect(count).toBe(0);
    act(() => {
      increment(1);
    })
    expect(hook.result.current[0]).toBe(1);
    act(() => {
      decrement(2);
    })
    expect(hook.result.current[0]).toBe(-1);
})