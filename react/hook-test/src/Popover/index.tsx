import { arrow, flip, FloatingArrow, offset, useClick, useDismiss, useFloating, useHover, useInteractions } from "@floating-ui/react";
import { CSSProperties, PropsWithChildren, ReactNode, useRef, useState } from "react";
import './index.scss'

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

interface PopoverProps extends PropsWithChildren {
  content: ReactNode,
  trigger?: 'hover' | 'click',
  placement?:Side | AlignedPlacement,
  open?: boolean,
  onOpenChange?: (open: boolean) => void,
  className?: string,
  style?: CSSProperties
}

export default function Popover(props: PopoverProps) {
  const {
    open,
    onOpenChange,
    content,
    trigger = 'hover',
    placement = 'bottom',
    className,
    style,
    children,
  } = props;

  const arrowRef = useRef(null);

  const [isOpen, setIsOpen] = useState(open);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: open => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    placement,
    middleware: [
      offset(10),
      arrow({
        element: arrowRef,
      }),
      flip()
    ]
  });

  let interactionClick = useClick(context);
  let interactionHover = useHover(context);

  // if (trigger === 'hover') {
  //   interaction = useHover(context);
  // } else {
  //   interaction = useClick(context);
  // }

  const dismiss = useDismiss(context);

  console.log(trigger);

  const {getReferenceProps, getFloatingProps} = useInteractions([
    trigger === 'hover' ? interactionHover : interactionClick,
    dismiss,
  ])

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()} className={className} style={style}>
        { children }
      </span>
      {
        isOpen && <div
          className="popover-floating"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          { content }
          <FloatingArrow ref={arrowRef} context={context} fill="#fff" stroke="#000" strokeWidth={1}></FloatingArrow>
        </div>
      }
    </>
  )
}