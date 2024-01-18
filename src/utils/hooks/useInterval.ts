import { useEffect, useRef } from 'react';

type Callback = () => void;
type useIntervalProps = {
    callback: Callback,
    delay?: number
}

function useInterval  ({callback, delay}: useIntervalProps) {
  const savedCallback = useRef<Callback | null>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
      const tick = () => savedCallback.current?.();
      
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval