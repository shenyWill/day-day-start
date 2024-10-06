import { Segmented } from "antd";
import React, { useState } from "react";
import { Material } from "../material";
import { Outline } from "../outline";
import { Source } from "../source";

export function MaterialWrapper() {
  const [key, setKey] = useState<string>("物料");

  return (
    <div>
      <Segmented
        value={key}
        onChange={setKey}
        block
        options={["物料", "大纲", "源码"]}
      />
      <div
        className="pt-[20px] h-[calc(100vh-110px)]"
      >
        {key === "物料" && <Material />}
        {key === "大纲" && <Outline />}
        {key === "源码" && <Source />}
      </div>
    </div>
  );
}
