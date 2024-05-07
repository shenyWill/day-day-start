import { cloneElement, useState } from "react"

const useHover = (element: React.ReactElement | ((hovered: boolean) => React.ReactElement)) => {
  const [value, setValue] = useState(false);

  const onMouseEnter = (originOnMouseEnter?: any) => {
    return (event: any) => {
      originOnMouseEnter?.(event);
      setValue(true);
    }
  };

  const onMouseLeave = (originOnMouseLeave?: any) => {
    return (event: any) => {
      originOnMouseLeave?.(event);
      setValue(false);
    }
  }

  if (typeof element === 'function') {
    element = element(value);
  }

  const dom = cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave),
  });
  return [dom, value];
};

export default useHover;