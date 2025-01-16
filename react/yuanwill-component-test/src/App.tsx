import { useState } from 'react'
import { Calendar } from 'yuanwill-component';
import 'yuanwill-component/dist/esm/Calendar/index.css'
import './App.css'
import dayjs from 'dayjs'

function App() {
  const now = dayjs();
  return (
    <>
      <Calendar value={now}></Calendar>
    </>
  )
}

export default App
