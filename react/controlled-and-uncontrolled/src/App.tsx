import type { ChangeEvent } from "react";

function App() {

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return <input defaultValue={'yuan'} onChange={onChange}/>
}

export default App
