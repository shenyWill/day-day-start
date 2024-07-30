import { CSSProperties, useEffect, useState } from "react";
import { getMaskStyle } from './getMaskStyle';
import './index.scss';

interface MaskProps {
  element: HTMLElement | null;
  container?: HTMLElement;

  renderMaskContent?: (wrapper: React.ReactNode) => React.ReactNode;

  onAnimationStart?: () => void;

  onAnimationEnd?: () => void;
}
export const Mask: React.FC<MaskProps> = props => {
  const { element, container, renderMaskContent, onAnimationEnd, onAnimationStart } = props;

  const [style, setStyle] = useState<CSSProperties>({});

  // useEffect(() => {
  //   onAnimationStart?.();
  //   const timer = setTimeout(() => {
  //     onAnimationEnd?.();
  //   }, 200);
  //   return () => {
  //     window.clearTimeout(timer);
  //   };
  // }, [element]);

  useEffect(() => {
    if (!element) return;

    element.scrollIntoView({
      block: 'center',
      inline: 'center',
    });

    const style = getMaskStyle(element, container || document.documentElement);

    setStyle(style);

  }, [element, container]);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const style = getMaskStyle(element, container || document.documentElement);
      setStyle(style);
    });
    observer.observe(container || document.documentElement);
  }, []);

  const getContent = () => {
    if (!renderMaskContent) return null;
    return renderMaskContent(
      <div className={'mask-content'} style={{ width: '100%', height: '100%' }}></div>
    )
  }

  return (
    <div style={style} className='mask'>
      {getContent()}
    </div>
  )
}