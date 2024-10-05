import React from "react";
import { Segmented } from "antd";
import { useState } from "react";
import { useComponetsStore } from "../stores/components";
import { SetAttr } from "./SettingComponent/SetAttr";
import { SetStyle } from "./SettingComponent/SetStyle";
import { SetEvent } from "./SettingComponent/SetEvent";

export function Setting() {
  const { curComponentId } = useComponetsStore();

  const [key, setKey] = useState<string>("属性");

  if (!curComponentId) return null;

  return (
    <div>
      <Segmented
        value={key}
        onChange={setKey}
        block
        options={["属性", "样式", "事件"]}
      />
      <div className="pt-[20px]">
        {key === "属性" && <SetAttr />}
        {key === "样式" && <SetStyle />}
        {key === "事件" && <SetEvent />}
      </div>
    </div>
  );
}
