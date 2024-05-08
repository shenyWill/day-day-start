// import { useWhyDidYouUpdate } from "ahooks";
import useWhyDidYouUpdate from "../hooks/useWhyDidYouUpdate";
import { IProps } from "ahooks/lib/useWhyDidYouUpdate";
import { useState } from "react";

export default function UseWhyDidYouUpdateTest(props: IProps) {
  const [randomNum, setRandomNum] = useState(Math.random());

  useWhyDidYouUpdate('useWhyDidYouUpdateTest', { ...props, randomNum });
  
  return (
    <div>
      <div>
        <span>number: { props.count }</span>
      </div>
      <div>
        <div>randomNum: { randomNum }</div>
        <button onClick={() => { setRandomNum(Math.random()) }}>设置randomNum</button>
      </div>
    </div>
  )
}