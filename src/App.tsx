// @ts-nocheck
import Form from './components/form'
import { Control } from './components/form'
import { useState } from 'react'
import './App.css'

function App() {
  const [controls, setControls] = useState()

  return (
    <>
      <Form onLoaded={setControls}>
        <Control.Text name='test' />
      </Form>
      <button onClick={() => controls.test.setDisabled()}>disable</button>
    </>
  );
}

export default App;
