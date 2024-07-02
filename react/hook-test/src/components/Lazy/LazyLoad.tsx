import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react";

interface LazyLoadProps {
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  placeholder?: ReactNode;
  className?: string;
  children: ReactNode;
  offset?: string | number;
  onContentVisible?: () => void;
}



const LazyLoad: FC<LazyLoadProps> = props => {
  const {
    style,
    width,
    height,
    placeholder,
    className ='',
    children,
    offset = 0,
    onContentVisible,
  } = props;
  const styles = { ...style, height, width };
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const elementObserver = useRef<IntersectionObserver>();

  function lazyloadHandler(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    const { isIntersecting } = entry;
    if (isIntersecting) {
      setVisible(true);
      onContentVisible?.();
      const node = containerRef.current;
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node);
      }
    }
  }

  useEffect(() => {
    const options = {
      rootMargin: typeof offset === 'number' ? `${offset}px` : offset || '0px',
      threshold: 0,
    };

    elementObserver.current = new IntersectionObserver(lazyloadHandler, options);
    const node = containerRef.current;

    if (node instanceof HTMLElement) {
      elementObserver.current.observe(node);
    }
    return () => {
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node);
      }
    };

  }, []);


  return <div ref={containerRef} style={styles} className={className}>
    {visible ? children : placeholder}
  </div>
}
export default LazyLoad;