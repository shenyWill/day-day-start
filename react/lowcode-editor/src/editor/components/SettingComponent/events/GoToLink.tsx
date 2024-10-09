import { Input } from "antd";
import { ComponentEvent } from "../../../stores/component-config";
import { useComponetsStore } from "../../../stores/components";
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";

export interface GoToLinkConfig {
  type: 'goToLink';
  url: string;
}

export interface GoToLinkProps {
  defaultValue?: string;
  onChange?: (value: GoToLinkConfig) => void;
}

export function GoToLink(props: GoToLinkProps) {
  const { defaultValue, onChange } = props;

  const { curComponentId } = useComponetsStore();

  const [value, setValue] = useState(defaultValue);

  function urlChange(value: string) {
    if (!curComponentId) return;

    setValue(value);

    onChange?.({
      type: 'goToLink',
      url: value,
    });
  }

  return (
    <div className="mt-[10px]">
      <div className="flex items-center gap-[10px]">
        <div>跳转链接</div>
        <div>
          <TextArea
            style={{ height: 200, width: 500, border: "1px solid #000" }}
            onChange={(e) => {
              urlChange(e.target.value);
            }}
            value={value || ""}
          ></TextArea>
        </div>
      </div>
    </div>
  );
}
