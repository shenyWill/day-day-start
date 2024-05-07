// import { useSize } from "ahooks";
import useSize from './../hooks/useSize'
import { useRef } from "react";

export default function UseSizeTest() {
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);

  return (
    <div ref={ref}>
      <p>改变窗口大小</p>
      <p>width: {size?.width};  height: {size?.height}</p>
    </div>
  )
} 