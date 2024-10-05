import React from "react";
import { Button as AntdButton } from "antd";
import { ButtonType } from "antd/es/button";
import { CommonComponentProps } from "../../interface";

export interface ButtonProps {
  type: ButtonType;
  text: string;
}

const Button = ({ id, type, text, styles }: CommonComponentProps) => {
  return (
    <AntdButton style={styles} data-component-id={id} type={type}>
      {text}
    </AntdButton>
  );
};

export default Button;
