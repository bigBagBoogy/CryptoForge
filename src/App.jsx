// src/App.jsx
import { useState, useRef } from 'react'
import './App.css'
import { Editor } from '@monaco-editor/react'

import file1 from './files/1-1.json'
import file2 from './files/1-2.json'

const files = {
  '1-1.json': file1,
  '1-2.json': file2,
  
}
function App() {
  const [fileName, setFileName] = useState('1-1.json')
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
 <button onClick={() => setFileName('1-1.json')}>1-1</button> 
 <button onClick={() => setFileName('1-2.json')}>1-2</button>
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
