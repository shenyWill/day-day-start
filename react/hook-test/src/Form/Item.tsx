import Schema from "async-validator";
import classNames from "classnames";
import React, { ChangeEvent, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import FormContext from "./FormContext";

export interface ItemProps {
  className?: string;
  style?: CSSProperties;
  label?: ReactNode;
  name?: string;
  valuePropName?: string;
  rules?: Array<Record<string, any>>;
  children?: ReactElement;
}

const getValueFormEvent = (e: ChangeEvent<HTMLInputElement>) => {
  const { target } = e;
  if (target.type === 'checkbox') {
    return target.checked;
  }
  return target.value;
};

const Item = (props: ItemProps) => {
  const {
    className,
    style,
    label,
    children,
    name,
    valuePropName,
    rules,
  } = props;

  if (!name) {
    return children!;
  }
  const [value, setValue] = useState<string | number | boolean>();
  const [error, setError] = useState('');


  const { onValueChange, values, validateRegister } = useContext(FormContext);

  useEffect(() => {
    if (value !== values?.[name]) {
      setValue(values?.[name]);
    }
  }, [values, values?.[name]]);

  const handleValidate = (value: any) => {
    let errorMsg = null;
    if (Array.isArray(rules) && rules.length) {
      const validator = new Schema({
        [name]: rules.map(rule => ({
          type: 'string',
          ...rule,
        }))
      });
      validator.validate({ [name]: value }, errors => {
        if (errors) {
          if (errors.length) {
            setError(errors[0].message!);
            errorMsg = errors[0].message!;
          } else {
            setError('');
            errorMsg = null;
          }
        } else {
          setError('');
          errorMsg = null;
        }
      })
    }
    return errorMsg;
  }

  useEffect(() => {
    validateRegister?.(name, () => handleValidate(value));
  }, [value]);

  const propsName: Record<string, any> = {};

  if (valuePropName) {
    propsName[valuePropName] = value;
  } else {
    propsName.value = value;
  }

  const childEle = React.Children.toArray(children).length > 1 ? children : React.cloneElement(children!, {
    ...propsName,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      console.log(123);
      const value = getValueFormEvent(e);
      setValue(value);
      onValueChange?.(name, value);
      handleValidate(value);
    }
  });

  const cls = classNames('ant-form-item', className);
  return (
    <div className={cls} style={style}>
      <div>
        { label && <label>{ label }</label> }
      </div>
      <div>
        {childEle}
        { error && <div style={{ color: 'red' }}>{ error }</div> }
      </div>
    </div>
  )

}

export default Item;