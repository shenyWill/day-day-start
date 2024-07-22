import { useInteractions, useFloating, useHover } from '@floating-ui/react';
import { useState } from 'react';
import Popover from './Popover';
import { ClickToComponent } from 'click-to-react-component';

function App() {
  const popoverContent = <div>
    赵子龙
    <button onClick={() => alert(1)}>点击</button>
  </div>
  return <>
    <ClickToComponent></ClickToComponent>
    <Popover content={popoverContent} placement='bottom' trigger='click' style={{margin: '200px'}}>
      <button>点我</button>
    </Popover>
  </>
}

export default App;