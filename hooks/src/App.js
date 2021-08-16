import {React, useState} from 'react'
import "./App.css"
import FetchUser from './components/FetchUser'
import Resize from './components/Resize'
import { LifeCycle } from './components/LifeCycle'

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="container">
      <div className="item-1">
         {show && <LifeCycle />}
      </div>
      <div className="item-1">
          <FetchUser />
      </div>

      <div className="item-1">
          {show && <Resize />}
      </div>
      <button onClick={()=>setShow(!show)}>Show/Hide</button>
    </div>
  )
}

export default App;
