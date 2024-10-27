import React from "react";
import { Button as AntdButton } from "antd";
import { ButtonType } from "antd/es/button";
import { CommonComponentProps } from "../../interface";
import { useDrag } from "react-dnd";

export interface ButtonProps {
  type: ButtonType;
  text: string;
}

const Button = ({ id, type, text, styles }: CommonComponentProps) => {
  const [_, drag] = useDrag({
    type: "Button",
    item: {
      id,
      type: "Button",
      dragType: "move",
    },
  })
  return (
    <AntdButton ref={drag} style={styles} data-component-id={id} type={type}>
      {text}
    </AntdButton>
  );
};

export default Button;
