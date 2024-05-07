// import { useHover } from "ahooks";
import useHover from './../hooks/useHoverTwo';
import { useRef } from "react";

export default function UseHoverTestTwo() {
  const domRef = useRef<HTMLDivElement>(null);

  const isHovered = useHover(domRef);

  return <div>
    <div ref={domRef}>hover me!!</div>
    <div>{isHovered ? 'hovered' : 'none'}</div>
  </div>
}