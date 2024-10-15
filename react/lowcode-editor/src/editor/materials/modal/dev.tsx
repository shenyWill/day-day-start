import { useMaterailDrop } from "../../hooks/useMaterialDrop";
import { CommonComponentProps } from "../../interface";
import React from "react";

function Modal({ id, children, title, styles }: CommonComponentProps) {
  const { canDrop, drop } = useMaterailDrop(["Button", "Container"], id);

  return (
    <div
      ref={drop}
      style={styles}
      data-component-id={id}
      className={`min-h-[100px] p-[20px] ${
        canDrop ? "border-[2px] border-[blue]" : "border-[1px] border-[#000]"
      }`}
    >
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}

export default Modal;
