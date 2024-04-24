import React, { useLayoutEffect, useState } from 'react';
import useMutationObserver from './useMutateObserver';

export interface MutationObserverProps {
  options?: MutationObserverInit;
  onMutate?: (mutations: MutationRecord[], observer: MutationObserver) => void;
  children: React.ReactElement;
}

const MutateObserver: React.FC<MutationObserverProps> = props => {
  const { options, onMutate = () => {}, children } = props;
  const elementRef = React.useRef<HTMLElement>(null);

  const [target, setTarget] = useState<HTMLElement>();

  useMutationObserver(target!, onMutate, options);

  useLayoutEffect(() => {
    setTarget(elementRef.current!);
  }, [])

  if (!children) {
    return null;
  }
  return React.cloneElement(children, { ref: elementRef });
};

export default MutateObserver;