import { useRef } from "react";
import { MessageProvider, MessageRef } from "./Message";
import { ConfigProvider } from "./Message/ConfigProvider";
import { useMessage } from './Message/useMessage'

function TestMessage() {
  const message = useMessage();
  return <button onClick={() => message.add({
    content: '请求成功'
  })}>点击</button>
}

function App() {
  // const messageRef = useRef<MessageRef>(null);
  // return (
  //   <div>
  //     <MessageProvider ref={messageRef}></MessageProvider>    
  //     <button onClick={() => {
  //       messageRef.current?.add({
  //         content: '请求成功',
  //       });
  //     }}>点击</button>  
  //   </div>
  // );
  return (
    <ConfigProvider>
      <div>
        <TestMessage></TestMessage>
      </div>
    </ConfigProvider>
  )
}

export default App;