import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';

describe('/hooks/useToggle', () => {
  it('returns correct initial state', () => {
    const view = renderHook(() => useToggle(['dark', 'light'] as const));
    expect(view.result.current[0]).toBe('dark');
  });

  it('correctly toggles value', () => {
    const view = renderHook(() => useToggle(['dark', 'light'] as const));

    act(() => view.result.current[1]());
    expect(view.result.current[0]).toBe('light');

    act(() => view.result.current[1]());
    expect(view.result.current[0]).toBe('dark');
  });

  it('correctly toggles more than two values', () => {
    const view = renderHook(() => useToggle(['dark', 'light', 'normal'] as const));

    act(() => view.result.current[1]());
    expect(view.result.current[0]).toBe('light');

    act(() => view.result.current[1]());
    expect(view.result.current[0]).toBe('normal');

    act(() => view.result.current[1]());
    expect(view.result.current[0]).toBe('dark');

    act(() => view.result.current[1]('normal'));
    expect(view.result.current[0]).toBe('normal');

    act(() => view.result.current[1]());
    expect(view.result.current[0]).toBe('dark');
  });

  it('allows to set value', () => {
    const view = renderHook(() => useToggle(['dark', 'light'] as const));

    act(() => view.result.current[1]('dark'));
    expect(view.result.current[0]).toBe('dark');

    act(() => view.result.current[1]('dark'));
    expect(view.result.current[0]).toBe('dark');
  });

  it('allows to set value with callback function', () => {
    const view = renderHook(() => useToggle(['dark', 'light'] as const));
    act(() => view.result.current[1]((v) => v));
    expect(view.result.current[0]).toBe('dark');
  });

  it('allows to use hook without options', () => {
    const view = renderHook(() => useToggle());
    expect(view.result.current[0]).toBe(false);
    act(() => view.result.current[1]());
    expect(view.result.current[0]).toBe(true);
  });
});

/*
In the first test, we are testing the default behavior of useToggle where it toggles between false and true. In the second test, we are testing the behavior of useToggle when specifying custom options, in this case, [1, 2].
*/
test('useToggle should toggle between two options', () => {
  const [option, toggle] = useToggle();

  // Initial option should be false
  expect(option).toBe(false);

  // Toggle the option
  toggle();
  expect(option).toBe(true);

  // Toggle the option again
  toggle();
  expect(option).toBe(false);
});

test('useToggle should toggle between specified options', () => {
  const [option, toggle] = useToggle([1, 2]);

  // Initial option should be 1
  expect(option).toBe(1);

  // Toggle the option
  toggle();
  expect(option).toBe(2);

  // Toggle the option again
  toggle();
  expect(option).toBe(1);
});