import { useEffect, useRef } from 'react';

type IntervalFunction = () => unknown | void;

/**
 * 리렌더링으로 인한 setInterval 오작동 방지를 위한 useInterval Hooks
 */
export function useInterval(callback: IntervalFunction, delay: number | null) {
  const savedCallback = useRef<IntervalFunction | null>(null);

  useEffect(() => {
    if (delay === null) return;
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay === null) return;
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
