import { Collapse, Input, Select, CollapseProps, Button } from "antd";
import { useComponetsStore } from "../../stores/components";
import { ComponentEvent, useComponentConfigStore } from "../../stores/component-config";
import { GoToLink, GoToLinkConfig } from "./events/GoToLink";
import React, { useState } from "react";
import { ShowMessage, ShowMessageConfig } from "./events/showMessage";
import { EventModal } from "./eventModal";
import { DeleteOutlined } from "@ant-design/icons";

export function SetEvent() {
  const { curComponent, updateComponentProps, curComponentId } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [curEvent, setCurEvent] = useState<ComponentEvent>();

  if (!curComponent) return null;

  const handleChange = (eventName: string, value: string) => {
    if (!curComponentId) return;
    updateComponentProps(curComponentId, { [eventName]: { type: value } });
  }

  const handleEventOk = (config?: GoToLinkConfig | ShowMessageConfig) => {
    if (!curComponentId || !config || !curEvent) return;
    updateComponentProps(curComponentId, { [curEvent.name]: {
      actions: [
        ...(curComponent.props[curEvent.name]?.actions || []),
        config,
      ]
    } });
    setEventModalOpen(false);
  }

  const handleDeleteEvent = (event: ComponentEvent, index: number) => {
    if (!curComponent) {
      return;
    }

    const actions = curComponent.props[event.name]?.actions;

    actions.splice(index, 1);

    updateComponentProps(curComponent.id, {
      [event.name]: {
        actions: actions,
      },
    });
  }

  const items: CollapseProps["items"] = (
    componentConfig[curComponent.name].events || []
  ).map((event) => {
    return {
      key: event.name,
      label: (
        <div className="flex justify-between leading-[30px]">
          {event.label}
          <Button
            type="primary"
            onClick={(e) => {
              e.stopPropagation();
              setCurEvent(event);
              setEventModalOpen(true);
            }}
          >
            添加动作
          </Button>
        </div>
      ),
      children: (
        <div>
          {(curComponent.props[event.name]?.actions || []).map(
            (item: GoToLinkConfig | ShowMessageConfig, index: number) => {
              return (
                <div key={index}>
                  {item.type === "goToLink" ? (
                    <div className="border border-[#aaa] m-[10px] p-[10px] relative">
                      <div className="text-[blue]">跳转链接</div>
                      <div>{item.url}</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteEvent(event, index)}
                      >
                        <DeleteOutlined />
                      </div>
                    </div>
                  ) : null}
                  {item.type === "showMessage" ? (
                    <div className="border border-[#aaa] m-[10px] p-[10px] relative">
                      <div className="text-[blue]">消息弹窗</div>
                      <div>{item.config.type}</div>
                      <div>{item.config.text}</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteEvent(event, index)}
                      >
                        <DeleteOutlined />
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }
          )}
        </div>
      ),
    };
  });

  return (
    <div className="px-[10px]">
      <Collapse
        className="mb-[10px]"
        items={items}
        defaultActiveKey={componentConfig[curComponent.name].events?.map(
          (item) => item.name
        )}
      />
      <EventModal
        visible={eventModalOpen}
        eventConfig={curEvent!}
        handleOk={handleEventOk}
        handleCancel={() => {
          setEventModalOpen(false);
        }}
      />
    </div>
  );
}
