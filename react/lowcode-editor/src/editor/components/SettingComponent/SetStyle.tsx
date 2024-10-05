import { Form, Input, InputNumber, Select } from "antd";
import { debounce } from "lodash-es";
import React, { useEffect, CSSProperties, useState } from "react";
import { ComponentSetter, useComponentConfigStore } from "../../stores/component-config";
import { useComponetsStore } from "../../stores/components";
import CssEditor from "../cssEditor";
import styleToObject from 'style-to-object';
export function SetStyle() {

  const [form] = Form.useForm();

  const [cssValue, setCssValue] = useState(`.comp{\n\n}`);

  const { curComponent, curComponentId, updateComponentStyles } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  useEffect(() => {
    form.resetFields();
    const data = form.getFieldsValue();
    form.setFieldsValue({...data, ...curComponent?.styles});
    setCssValue(toCSSStr(curComponent?.styles || {}));
  }, [curComponent]);

  if (!curComponentId || !curComponent) return null;

  const renderFormItem = (setter: ComponentSetter) => {
    if (setter.type === 'input') {
      return <Input></Input>
    } else if (setter.type === "inputNumber") {
      return <InputNumber></InputNumber>
    } else if (setter.type === 'select') {
      return <Select options={setter.options}></Select>
    }
  };


  const toCSSStr = (css: Record<string, any>) => {
    let str = `.comp {\n`;
    for (let key in css) {
      let value = css[key];
      if (!value) {
        continue;
      }
      if (["width", "height"].includes(key) && !value.toString().endsWith("px")) {
        value += "px";
      }

      str += `\t${key}: ${value};\n`;
    }
    str += `}`;
    return str;
  }

  const formatCssValue = value => {
    let css: Record<string, any> = {};
    try {
      const cssStr = value
        .replace(/\/\*.*\*\//, "") // 去掉注释 /** */
        .replace(/(\.?[^{]+{)/, "") // 去掉 .comp {
        .replace("}", ""); // 去掉 }

      styleToObject(cssStr, (name, value) => {
        css[
          name.replace(/-\w/, (item) => item.toUpperCase().replace("-", ""))
        ] = value;
      });
    } catch (error) {
    }
    return css;
  }

  const handleChange = (value: CSSProperties) => {
    if (curComponentId) {
      updateComponentStyles(curComponentId, {...value, ...formatCssValue(cssValue)}, true);
    }
  }

  const handleEditorChange = debounce(value => {
    setCssValue(value);
    updateComponentStyles(curComponentId, { ...form.getFieldsValue(), ...formatCssValue(value)}, true);
  }, 500);

  return (
    <Form
      form={form}
      onValuesChange={handleChange}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
    >
      {componentConfig[curComponent!.name].stylesSetter?.map((setter) => (
        <Form.Item label={setter.label} key={setter.name} name={setter.name}>
          {renderFormItem(setter)}
        </Form.Item>
      ))}
      <div className="h-[200px] border-[1px] border-[#ccc]">
        <CssEditor value={cssValue} onChange={handleEditorChange}></CssEditor>
      </div>
    </Form>
  );
}

