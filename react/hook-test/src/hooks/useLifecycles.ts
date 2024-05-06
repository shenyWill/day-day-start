import { useEffect } from "react";

const useLifecycles = (mount: Function, unmount: Function) => {
  useEffect(() => {
    mount && mount();
    return () => {
      unmount && unmount();
    };
  }, []);
}

export default useLifecycles;