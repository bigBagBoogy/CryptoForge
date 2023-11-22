import { useState } from 'react'
import './App.css'
import { Editor } from '@monaco-editor/react'

function App() {
  const [count, setCount] = useState(0)

return (
 <> 
  <div className='App' id='editor'>
    <Editor
      height="100vh"
      width="100%" 
      theme='vs-dark'
      defaultLanguage='sol'/>
  </div>       
 </>
  )
}

export default App
