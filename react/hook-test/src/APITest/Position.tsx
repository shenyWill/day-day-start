import { MouseEventHandler, useEffect, useRef } from "react";

export default function Position() {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    const top = document.getElementById('box')!.getBoundingClientRect().top;
    console.log('box pageY:', e.pageY);
    console.log('box clientY:', e.clientY);
    console.log('box offsetY', e.pageY - window.scrollY - top);
    console.log('box offseY1', e.nativeEvent.offsetY);
    console.log('box screenY', e.screenY);
  };
  
  useEffect(() => {
    document.getElementById('box')!.addEventListener('click', e => {
      console.log('box2 pageY:', e.pageY);
      console.log('box2 clientY:', e.clientY);
      console.log('box2 offsetY', e.offsetY);
      console.log('box2 screenY', e.screenY);
    })
  }, [])

  return (
    <div>
      <div id="box" ref={ref} style={{
        marginTop: '800px',
        width: '100px',
        height: '100px',
        background: 'blue'
      }} onClick={handleClick}></div>
    </div>
  )
};