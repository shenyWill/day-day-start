import { Form, Input, Select } from "antd";
import React from "react";
import { useEffect } from "react";
import { ComponentSetter, useComponentConfigStore } from "../../stores/component-config";
import { useComponetsStore, Component } from "../../stores/components";


export function SetAttr() {
  const [form] = Form.useForm();
  
  const { curComponentId, curComponent, updateComponentProps } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();


  useEffect(() => {
    const data = form.getFieldsValue();
    form.setFieldsValue({ ...data, ...curComponent?.props });
  }, [curComponent]);

  if (!curComponentId || !curComponent) return null;

  const handleValuesChange = (newValue: Component["props"]) => {
    console.log(newValue);
    if (curComponentId) {
      updateComponentProps(curComponentId, newValue);
    }
  };


  // 选中的组件的配置项
  const curComponentConfigSetter = componentConfig[curComponent!.name].setter;

  const renderFormItem = (setter: ComponentSetter) => {
    if (setter.type === 'input') {
      return <Input></Input>
    } else {
      return <Select options={setter?.options}></Select>
    }
  }

  return (
    <Form
      form={form}
      onValuesChange={handleValuesChange}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item label="组件ID">
        <Input value={curComponent?.id} disabled></Input>
      </Form.Item>
      <Form.Item label="组件名称">
        <Input value={curComponent?.name} disabled></Input>
      </Form.Item>
      <Form.Item label="组件描述">
        <Input value={curComponent?.desc} disabled></Input>
      </Form.Item>
      {curComponentConfigSetter?.map(setter => (
        <Form.Item label={setter.label} key={setter.name} name={setter.name}>
          {renderFormItem(setter)}
        </Form.Item>
      ))}
    </Form>
  );
}