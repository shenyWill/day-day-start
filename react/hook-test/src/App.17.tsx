import { useInteractions, useFloating, useHover } from '@floating-ui/react';
import { useState } from 'react';
import { ClickToComponent } from 'click-to-react-component';
import { Mask } from './Mask';
import { Popover } from 'antd'

function App() {
  const popoverContent = <div>
    赵子龙
    <button onClick={() => alert(1)}>点击</button>
  </div>

  return <>
    <div id='xxx'>
      <h1>我是标题</h1>
      <div>我是内容我是内容</div>
      <p> 我是结尾</p>
    </div>
    <Mask element={document.getElementById('xxx')!} renderMaskContent={wrapper => {

      return <Popover content={
        <div style={{width: 300}}>
          <p>hello</p>
          <button>下一步</button>
        </div>
      } open={true}>{wrapper}</Popover>;
    }}></Mask>
  </>
}

export default App;