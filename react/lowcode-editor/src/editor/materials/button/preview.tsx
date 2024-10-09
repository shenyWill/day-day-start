import React from "react";
import { Button as AntdButton } from "antd";
import { CommonComponentProps } from "../../interface";

const Button = ({ id, type, text, styles, ...props }: CommonComponentProps) => {
  return (
    <AntdButton style={styles} type={type} {...props}>
      {text}
    </AntdButton>
  );
};

export default Button;
