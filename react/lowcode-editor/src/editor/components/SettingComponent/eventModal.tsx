import { Modal, Segmented } from "antd";
import React, { useEffect, useState } from "react";
import { GoToLink, GoToLinkConfig } from "./events/GoToLink";
import { ComponentEvent } from "../../stores/component-config";
import { ShowMessage, ShowMessageConfig } from "./events/showMessage";
import { CustomJs, CustomJsConfig } from "./events/CustomJs";
import { ComponentMethod, ComponentMethodConfig } from "./events/componentMethod";

interface ActionModalProps {
  visible: boolean;
  event?: EventConfig;
  handleOk: (config?: EventConfig) => void;
  handleCancel: () => void;
}


export type EventConfig =
  | GoToLinkConfig
  | ShowMessageConfig
  | CustomJsConfig
  | ComponentMethodConfig;

const map = {
  goToLink: "访问链接",
  showMessage: '消息提示',
  customJs: '自定义 JS',
  componentMethod: '组件方法'
};

export function EventModal(props: ActionModalProps) {
  const { visible, event, handleOk, handleCancel } = props;


  const [key, setKey] = useState<string>("访问链接");
  const [curConfig, setCurConfig] = useState<EventConfig>();

  useEffect(() => {
    if (event?.type) {
      setKey(map[event.type]);
    }
  }, [event]);

  return (
    <Modal
      title="事件动作配置"
      width={800}
      open={visible}
      okText="添加"
      cancelText="取消"
      onOk={() => handleOk(curConfig)}
      onCancel={handleCancel}
    >
      <div className="h-[500px]">
        <Segmented
          value={key}
          onChange={setKey}
          block
          options={["访问链接", "消息提示", "组件方法", "自定义 JS"]}
        />
        {key === "访问链接" && (
          <GoToLink
            value={event?.type === "goToLink" ? event.url : ""}
            onChange={(config) => setCurConfig(config)}
          />
        )}
        {key === "消息提示" && (
          <ShowMessage
            value={event?.type === "showMessage" ? event.config : undefined}
            onChange={(config) => setCurConfig(config)}
          />
        )}
        {key === "组件方法" && (
          <ComponentMethod
            key="showMessage"
            value={event?.type === "componentMethod" ? event.config : undefined}
            onChange={(event) => {
              setCurConfig(event);
            }}
          />
        )}
        {key === "自定义 JS" && (
          <CustomJs
            value={event?.type === "customJs" ? event.code : ""}
            onChange={(config) => setCurConfig(config)}
          />
        )}
      </div>
    </Modal>
  );
}
