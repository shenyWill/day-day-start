import { RefObject, useEffect, useState } from "react";

const useScrolling = (domRef: RefObject<HTMLElement>) : boolean => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (domRef.current) {
      let scrollingTimer: any;
      const handleScrollEnd = () => {
        setScrolling(false);
      }
      const handleScroll = () => {
        setScrolling(true);
        clearTimeout(scrollingTimer);
        scrollingTimer = setTimeout(() => handleScrollEnd(), 150);
        
      };
      domRef.current?.addEventListener('scroll', handleScroll);
      return () => {
        if(domRef.current) {
          domRef.current?.removeEventListener('scroll', handleScroll)
        }
      };
    }
  }, [domRef]);
  return scrolling;
}
export default useScrolling;