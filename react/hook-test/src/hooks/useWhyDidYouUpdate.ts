import { useEffect, useRef } from "react";

type IPorps = Record<string, any>;
const useWhyDidYonUpdate = (componentName: string, props: IPorps) => {
  const preProps = useRef<IPorps>({});

  useEffect(() => {
    const keys = Object.keys({...preProps, ...props});
    const changeProps: IPorps = {};
    keys.forEach(key => {
      if (!Object.is(preProps.current[key], props[key])) {
        changeProps[key] = {
          from: preProps.current[key],
          to: props[key],
        };
      }
    });
    if (Object.keys(changeProps).length) {
      console.log('[why-did-you-update]', componentName, changeProps);
    };
    preProps.current = props;
  })
}

export default useWhyDidYonUpdate;