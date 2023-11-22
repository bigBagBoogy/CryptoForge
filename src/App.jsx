// src/App.jsx
import { useState, useRef } from 'react'
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
  const editorRef = useRef(null)
  const file = files[fileName]
// files[fileName] -> file -> path, defaultLanguage, dafaultValue
function handleEditorDidMount(editor, monaco) {
  editorRef.current = editor
}
function getEditorValue() {
  alert(editorRef.current.getValue()) 
}

return (
 <>
 <button onClick={() => setFileName('1-1.sol')}>1-1.sol</button> 
 <button onClick={() => setFileName('1-2.sol')}>1-2.sol</button>
 <button onClick={() => getEditorValue()}>getEditorValue</button>
  <div className='App' id='editor'>
    <Editor
      height="100vh"
      width="100%" 
      theme='vs-dark'
      onMount={handleEditorDidMount}
      path={file.name}
      defaultLanguage={file.language}
      defaultValue={file.value} />
  </div>       
 </>
  )
}

export default App
