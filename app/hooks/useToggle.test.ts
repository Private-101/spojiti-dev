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