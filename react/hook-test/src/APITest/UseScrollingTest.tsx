import { useRef } from "react";
// import { useScroll, useScrolling } from "react-use";
// import './test.scss';
import useScrolling from './../hooks/useScrolling';

export default function UseScrollingTest() {
  const domRef = useRef<HTMLDivElement>(null);
  const scrolling = useScrolling(domRef);

  return (
    <>
      {<div> {scrolling ? '滚动中...' : '没有滚动'} </div>}
      <div ref={domRef} style={{height: '200px', overflow: 'auto'}}>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      <div>zhaozilong</div>
      </div>
    </>
  )
}