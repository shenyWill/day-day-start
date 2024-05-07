import { RefObject, useEffect, useState } from "react";

interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
  onChange?: (isHovering: boolean) => void;
}

const useHoverTwo = (element: RefObject<HTMLElement>, options?: Options): boolean => {
  const [hovered, setHovered] = useState<boolean>(false);

  const { onEnter, onLeave, onChange } = options || {};

  useEffect(() => {
    const handleMouseEnter = () => {
      setHovered(true);
      onEnter?.();
      onChange?.(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
      onLeave?.();
      onChange?.(false);
    };

    const target = element.current;

    if (!target) return;

    target.addEventListener('mouseenter', handleMouseEnter);
    target.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      target.removeEventListener('mouseenter', handleMouseEnter);
      target.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [element]);
  return hovered;

}

export default useHoverTwo;