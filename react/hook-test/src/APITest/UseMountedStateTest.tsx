import { useEffect, useState } from "react";
// import { useMountedState } from "react-use";
import useMountedState from './../hooks/useMountedState';

export default function TestUseMountedState() {
  const isMounted = useMountedState();
  const [, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNum(1)
    }, 1000);
  }, []);

  return <div>{ isMounted() ? 'mounted' : 'pending' }</div>
}