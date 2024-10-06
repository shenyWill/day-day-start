import React from "react";
import { CommonComponentProps } from "../../interface";

function Page({ id, name, styles, children }: CommonComponentProps) {
  return (
    <div
      className="p-[20px]"
      style={{ ...styles }}
    >
      {children}
    </div>
  );
}

export default Page;
