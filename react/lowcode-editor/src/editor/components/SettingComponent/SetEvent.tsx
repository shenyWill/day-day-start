import { Collapse, Input, Select, CollapseProps, Button } from "antd";
import { useComponetsStore } from "../../stores/components";
import { ComponentEvent, useComponentConfigStore } from "../../stores/component-config";
import { GoToLink, GoToLinkConfig } from "./events/GoToLink";
import React, { useState } from "react";
import { ShowMessage, ShowMessageConfig } from "./events/showMessage";
import { EventConfig, EventModal } from "./eventModal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export function SetEvent() {
  const { curComponent, updateComponentProps, curComponentId } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [curEvent, setCurEvent] = useState<ComponentEvent>();
  const [curAction, setCurAction] = useState<EventConfig>();
  const [curActionIndex, setCurActionIndex] = useState<number>();

  if (!curComponent) return null;

  const handleEventOk = (config?: EventConfig) => {
    console.log(22222, curComponentId, config, curEvent);
    if (!curComponentId || !config || !curEvent) return;
    if (curAction) {
      updateComponentProps(curComponentId, {
        [curEvent.name]: {
          actions: curComponent.props[curEvent.name]?.actions.map((item: EventConfig, index: number) => {
            if (index === curActionIndex) {
              return config;
            }
            return item;
          }),
        }
      })
    } else {
      updateComponentProps(curComponentId, {
        [curEvent.name]: {
          actions: [
            ...(curComponent.props[curEvent.name]?.actions || []),
            config,
          ],
        },
      });
    }
    setCurAction(undefined);
    console.log(123);
    setEventModalOpen(false);
  };

  const handleEditEvent = (config: EventConfig, index: number) => {
    if (!curComponent) {
      return;
    }
    setCurAction(config);
    setCurActionIndex(index);
    setEventModalOpen(true);
  };

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
            (item: EventConfig, index: number) => {
              return (
                <div key={index}>
                  {item.type === "goToLink" ? (
                    <div
                      key="goToLink"
                      className="border border-[#aaa] m-[10px] p-[10px] relative"
                    >
                      <div className="text-[blue]">跳转链接</div>
                      <div>{item.url}</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 30,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setCurEvent(event);
                          handleEditEvent(item, index);
                        }}
                      >
                        <EditOutlined />
                      </div>
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
                    <div
                      key="showMessage"
                      className="border border-[#aaa] m-[10px] p-[10px] relative"
                    >
                      <div className="text-[blue]">消息弹窗</div>
                      <div>{item.config.type}</div>
                      <div>{item.config.text}</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 30,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setCurEvent(event);
                          handleEditEvent(item, index);
                        }}
                      >
                        <EditOutlined />
                      </div>
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
                  {item.type === "customJs" ? (
                    <div
                      key="customJs"
                      className="border border-[#aaa] m-[10px] p-[10px] relative"
                    >
                      <div className="text-[blue]">自定义 JS</div>
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 30,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setCurEvent(event);
                          handleEditEvent(item, index);
                        }}
                      >
                        <EditOutlined />
                      </div>
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
        event={curAction}
        handleOk={handleEventOk}
        handleCancel={() => {
          setEventModalOpen(false);
        }}
      />
    </div>
  );
}
