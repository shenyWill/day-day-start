import React, { useEffect, useState } from "react";
import { useComponetsStore } from "../../../stores/components";
import MonacoEditor, { OnMount } from "@monaco-editor/react";

export interface CustomJsConfig {
  type: 'customJs';
  code: string;
}

export interface CustomJsProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: CustomJsConfig) => void;
}

export function CustomJs(props: CustomJsProps) {
  const { value: val, defaultValue, onChange } = props;
  const { curComponentId } = useComponetsStore();

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(val);
  },[val])

  const handleEditorMount: OnMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
      editor.getAction("editor.action.formatDocument")?.run();
    });
  };

  const codeChange = (value?: string) => {
    if (!curComponentId) return;
    setValue(value);
    onChange?.({
      type: 'customJs',
      code: value!,
    });
  }


  return (
    <div className="mt-[40px]">
      <div className="flex items-start gap-[20px]">
        <div>
          <MonacoEditor
            width={"600px"}
            height={"400px"}
            path="action.js"
            language="javascript"
            onMount={handleEditorMount}
            onChange={codeChange}
            value={value}
            options={{
              fontSize: 14,
              scrollBeyondLastLine: false,
              minimap: {
                enabled: false,
              },
              scrollbar: {
                verticalScrollbarSize: 6,
                horizontalScrollbarSize: 6,
              },
            }}
          ></MonacoEditor>
        </div>
      </div>
    </div>
  );
}