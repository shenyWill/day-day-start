import { message } from "antd";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useComponentConfigStore } from "../../stores/component-config";
import { Component, useComponetsStore } from "../../stores/components";
import { GoToLinkConfig } from "../SettingComponent/events/GoToLink";
import { ShowMessageConfig } from "../SettingComponent/events/showMessage";

export function Preview() {
  const { components } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  function handleEvent(component: Component) {
    const props: Record<string, any> = {};
    componentConfig[component.name].events?.forEach(event => {
      const eventConfig = component.props?.[event.name];
      if (eventConfig) {
        props[event.name] = () => {
          eventConfig?.actions?.forEach((action: GoToLinkConfig | ShowMessageConfig) => {
            const { type } = action;
            if (type === "goToLink" && action.url) {
              window.open(action.url);
            } else if (type === "showMessage" && action.config) {
              if (action.config.type === "success") {
                message.success(action.config.text);
              } else if (action.config.type === "error") {
                message.error(action.config.text);
              }
            }
          })
        }
      }
    });
    return props;
  }

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name];

      if (!config?.preview) {
        return null;
      }

      return React.createElement(
        config.preview,
        {
          key: component.id,
          id: component.id,
          name: component.name,
          styles: component.styles,
          ...config.defaultProps,
          ...component.props,
          ...handleEvent(component),
        },
        renderComponents(component.children || [])
      );
    });
  }

  return (
    <div
      className="h-[100%]"
    >
      {renderComponents(components)}
    </div>
  );
}
