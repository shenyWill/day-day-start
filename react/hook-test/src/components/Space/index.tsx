import classNames from "classnames";
import React from "react";
import './index.scss';

export type SizeType = 'small' | 'middle' | 'large' | number | undefined;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  warp?: boolean;
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};

const getNumberSize = (size: SizeType) => {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}


const Space: React.FC<SpaceProps> = props => {
  const { className, style, children, size='small', direction='horizontal', align, split, warp=false,  ...otherProps } = props;

  const childNodes = React.Children.toArray(children);
  const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;
  const cn = classNames(
    'space',
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign,
    },
    className,
  )

  const nodes = childNodes.map((child: any, i) => {
    const key = child & child.key || `space-item-${i}`;

    return (<>
      <div className="space-item" key={key}>
        {child}
      </div>
      {
        i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>{split}</span>
        )
      }
    </>)
  })

  const otherStyles: React.CSSProperties = {};
  
  const [horizontalSize, verticalSize] = React.useMemo(() => {
    return ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map(item => getNumberSize(item))
  }, [size]);

  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;

  if (warp) {
    otherStyles.flexWrap = 'wrap';
  }

  return (
    <div className={cn} style={{
      ...otherStyles,
      ...style
    }} {...otherProps}>
      {nodes}
    </div>
  )
}
export default Space;