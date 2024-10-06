import React, { MouseEventHandler, useEffect, useState } from "react";
import { useComponentConfigStore } from "../stores/component-config";
import { Component, useComponetsStore } from "../stores/components";
import ClickContent from "./clickContent";
import HoverContent from './hoverContent';

export function EditArea() {
  const { components, addComponent, curComponentId, setCurComponentId } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  const [hoverComponentId, setHoverComponentId] = useState<number>();

  const handleMouseOver: MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath();

    for (let i = 0; i < path.length; i += 1) {
      const ele = path[i] as HTMLElement;

      const componentId = ele.dataset?.componentId;
      if (componentId) {
        setHoverComponentId(+componentId);
        return;
      }
    }
  };

  const handleClick: MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath();

    for (let i = 0; i < path.length; i += 1) {
      const ele = path[i] as HTMLElement;

      const componentId = ele.dataset?.componentId;
      if (componentId) {
        setCurComponentId(+componentId);
        return;
      }
    }
  }

  function renderComponents(components: Component[]): React.ReactNode {
    
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name];

      if (!config?.dev) {
        return null;
      }

      return React.createElement(
        config.dev,
        {
          key: component.id,
          id: component.id,
          name: component.name,
          styles: component.styles,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || [])
      );
    });
  }

  return (
    <div
      className="h-[100%] draw-content"
      onMouseOver={handleMouseOver}
      onMouseLeave={() => {
        setHoverComponentId(undefined);
      }}
      onClick={handleClick}
    >
      {renderComponents(components)}
      {hoverComponentId && hoverComponentId !== curComponentId && (
        <HoverContent
          portalWrapperClassName="portal-wrapper"
          componentId={hoverComponentId}
          containerClassName="draw-content"
        />
      )}
      {curComponentId && (
        <ClickContent
          portalWrapperClassName="portal-wrapper"
          componentId={curComponentId}
          containerClassName="draw-content"
        />
      )}
      <div className="portal-wrapper"></div>
    </div>
  );
}
