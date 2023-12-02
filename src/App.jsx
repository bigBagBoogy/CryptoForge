// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Editor } from '@monaco-editor/react';
import { LessonBuilder } from './LessonBuilder';
import LessonMarkdown from './LessonMarkdown';
import Navbar from './Navbar';

function App() {
  const [lessonId, setLessonId] = useState('1-1'); // Initial lesson ID
  const [text, setText] = useState({
    id: 'default',
    value: '',
  });
  const [code, setCode] = useState({
    id: 'default',
    value: '',
  });
  const totalLessons = 3;
  const editorRef = useRef(null);

  // useEffect(() => {
  //   console.log("File state after update:", file);
  // }, [file]);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  function handleLessonCode(solidityData) {
    // Update the file state with the solidity data
    setCode(solidityData);
  }
  // Function to handle lesson text data
  function handleLessonText(markdownData) {
    // Update the file state with the markdown data
    setText(markdownData);
  }

  return (
    <>
      {/* Use the Navbar component and pass the setLessonId function */}
      <Navbar lessonId={lessonId} setLessonId={setLessonId} totalLessons={totalLessons} />


      <button onClick={() => getEditorValue()}>getEditorValue</button>
      <div className='lesson-textbox'>
      <LessonMarkdown lessonId={lessonId} setLessonData={handleLessonText} />
      </div>
      {/* Render the Editor component with the updated file state */}
      <div className='App' id='editor'>
        <Editor
          height='100vh'
          width='100%'
          theme='vs-dark'
          onMount={handleEditorDidMount}
          path={`file:///lesson-${code.id}.sol`}   // = virtual path  
          defaultLanguage="sol"
          defaultValue={code.value}
        />        
      </div>
      {/* Render the LessonBuilder component and pass the lesson ID and handler function */}
      <LessonBuilder lessonId={lessonId} setLessonData={handleLessonCode} />
    </>
  );
}

export default App;
