import { CSSProperties, FC, forwardRef, ReactNode, useEffect, useImperativeHandle, useMemo } from "react";
import useStore from "./useStore";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.scss';
import { createPortal } from "react-dom";
import { useTimer } from "./useTimer";

export type Position = 'top' | 'bottom'; 

export interface MessageProps {
  style?: CSSProperties;
  className?: string | string[];
  content: ReactNode;
  duration?: number;
  id?: number;
  position?: Position;
  onClose?: (...args: any) => void;
}

const MessageItem: FC<MessageProps> = item => {
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: item.id || 0,
    duration: item.duration || 2000,
    remove: item.onClose!,
  });
  return <div className="message-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {item.content}
  </div>
}

export interface MessageRef {
    add: (messageProps: MessageProps) => number;
    remove: (id: number) => void;
    update: (id: number, messageProps: MessageProps) => void;
    clearAll: () => void;
}

export const MessageProvider = forwardRef<MessageRef, {}>((props, ref) => {
  const { messageList, add, update, remove, clearAll } = useStore('top');
  // useEffect(() => {
  //   setInterval(() => {
  //     add({
  //         content: Math.random().toString().slice(2, 8)
  //     })
  //   }, 2000);
  // }, []);

  // useImperativeHandle(ref, () => {
  //   return {
  //     add,
  //     remove,
  //     update,
  //     clearAll,
  //   }
  // }, []);
  if ('current' in ref!) {
    ref.current = {
      add,
      remove,
      update,
      clearAll,
    }
  }
  const positions = Object.keys(messageList) as Position[];

  const messageWrapper = <div className="message-wrapper">
    {
      positions.map(direction => {
        return <TransitionGroup className={`message-wrapper-${direction}`} key={direction}>
          {
            messageList[direction].map(item => {
              return  <CSSTransition key={item.id} timeout={1000} classNames='message'>
                <MessageItem onClose={remove} {...item}></MessageItem>
              </CSSTransition>
            })
          }
        </TransitionGroup>
      })
    }
  </div>

  const el = useMemo(() => {
    const el = document.createElement('div');
    el.className = 'wrapper';
    document.body.appendChild(el);
    return el;
  }, []);


  return createPortal(messageWrapper, el);
})