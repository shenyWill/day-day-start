import classNames from "classnames";
import { PropsWithChildren, useState, DragEvent } from "react";

interface DraggerProps extends PropsWithChildren {
  onFile: (files: FileList) => void;
}

export const Dragger: React.FC<DraggerProps> = props => {
  const { onFile, children } = props;

  const [dragOver, setDragOver] = useState(false);
  
  const cs = classNames('upload-dragge', {
    'is-dragover': dragOver,
  });

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer!.files);
  }

  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  }
  return (
    <div
      className={cs}
      onDragOver = {e => handleDrag(e, true)}
      onDragLeave = {e => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}

export default Dragger;