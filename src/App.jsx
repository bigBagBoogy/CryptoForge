// src/App.jsx
import { useState } from 'react'
import './App.css'
import { Editor } from '@monaco-editor/react'

const files = {
  '1-1.sol': {
    name:'1-1.sol',
    language:'sol',
    value:'// SPDX-License-Identifier: MIT'
  },
  '1-2.sol': {
    name:'1-2.sol',
    language:'sol',
    value:'// SPDX-License-Identifier: MIT 2'
  }
}
function App() {
  const [fileName, setFileName] = useState('1-1.sol')
  const file = files[fileName]
// files[fileName] -> file -> path, defaultLanguage, dafaultValue


return (
 <> 
  <div className='App' id='editor'>
    <Editor
      height="100vh"
      width="100%" 
      theme='vs-dark'
      path={file.name}
      defaultLanguage={file.language}
      defaultValue={file.value} />
  </div>       
 </>
  )
}

export default App
