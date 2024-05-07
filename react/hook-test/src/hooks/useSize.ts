import { RefObject, useEffect, useState } from "react";

type Size = {
  width: number;
  height: number;
}

const useSize = (element: RefObject<HTMLElement>): (Size | undefined) => {
  const [size, setSize] = useState<Size | undefined>(() => {
    if (element.current) {
      const target = element.current;
      return { width: target.clientWidth, height: target.clientHeight }
    } else {
      return undefined;
    }
  });
  useEffect(() => {
    const target = element.current;
    if (!target) return;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const { clientWidth, clientHeight } = entry.target;
        setSize({ width: clientWidth, height: clientHeight });
      })
    });
    resizeObserver.observe(target);
    return () => {
      resizeObserver.disconnect();
    }
  }, [element]);
  return size;
};

export default useSize;