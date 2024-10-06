import { Tree } from "antd";
import { useComponetsStore } from "../../stores/components";
import React from "react";
export function Outline() {
  const { components, setCurComponentId } = useComponetsStore();

  return (
    <Tree
      fieldNames={{ title: "desc", key: "id" }}
      treeData={components as any}
      showLine
      defaultExpandAll
      onSelect={([selectedKey]) => {
        setCurComponentId(selectedKey as number);
      }}
    />
  );
}
