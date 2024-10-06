import { create } from "zustand";
import ContainerDev from "../materials/container/dev";
import ContainerPre from "../materials/container/preview";
import ButtonDev from "../materials/button/dev";
import ButtonPre from "../materials/button/preview";
import PageDev from "../materials/page/dev";
import PagePre from "../materials/page/preview";


export interface ComponentSetter {
  name: string;
  label: string;
  type: string;
  [key: string]: any;
};

export interface ComponentConfig {
  name: string;
  desc: string;
  defaultProps: Record<string, any>;
  setter?: ComponentSetter[];
  stylesSetter?: ComponentSetter[];
  dev: any;
  preview: any;
}

interface State {
  componentConfig: { [key: string]: ComponentConfig };
}

interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void;
}

export const useComponentConfigStore = create<State & Action>((set) => ({
  componentConfig: {
    Container: {
      name: "Container",
      defaultProps: {},
      desc: '容器',
      dev: ContainerDev,
      preview: ContainerPre,
    },
    Button: {
      name: "Button",
      defaultProps: {
        type: "primary",
        text: "按钮",
      },
      setter: [
        {
          name: "text",
          type: "input",
          label: "文本",
        },
        {
          name: "type",
          label: "类型",
          type: "select",
          options: [
            {
              label: "默认",
              value: "default",
            },
            {
              label: "主要",
              value: "primary",
            },
          ],
        },
      ],
      stylesSetter: [
        {
          name: "width",
          label: "宽度",
          type: "inputNumber",
        },
        {
          name: 'height',
          label: '高度',
          type: 'inputNumber',
        },
      ],
      desc: '按钮',
      dev: ButtonDev,
      preview: ButtonPre,
    },
    Page: {
      name: "Page",
      desc: "页面",
      defaultProps: {},
      dev: PageDev,
      preview: PagePre,
    },
  },
  registerComponent: (name, componentConfig) =>
    set((state) => {
      return {
        ...state,
        componentConfig: {
          ...state.componentConfig,
          [name]: componentConfig,
        },
      };
    }),
}));
