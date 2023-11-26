// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Editor } from '@monaco-editor/react';
import { LessonBuilder } from './LessonBuilder';
import { LessonTextBox } from './LessonTextBox';

function App() {
  const [lessonId, setLessonId] = useState('1-1'); // Initial lesson ID
  const [file, setFile] = useState({
    id: 'default',
    value: '',
  });

  const editorRef = useRef(null);

  useEffect(() => {
    console.log("File state after update:", file);
  }, [file]);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  function handleLessonData(lessonData) {
    console.log("Received lesson data:", lessonData);

    // Update the file state with the lesson data
    setFile(lessonData);
  }

  return (
    <>
      <button onClick={() => setLessonId('1-1')}>1-1</button>
      <button onClick={() => setLessonId('1-2')}>1-2</button>
      <button onClick={() => setLessonId('1-3')}>1-3</button>

      <button onClick={() => getEditorValue()}>getEditorValue</button>
      <LessonTextBox />

      {/* Render the Editor component with the updated file state */}
      <div className='App' id='editor'>
        <Editor
          height='100vh'
          width='100%'
          theme='vs-dark'
          onMount={handleEditorDidMount}
          path={`file:///lesson-${file.id}.sol`}   // = virtual path  
          defaultLanguage="sol"
          defaultValue={file.value}
        />
      </div>

      {/* Render the LessonBuilder component and pass the lesson ID and handler function */}
      <LessonBuilder lessonId={lessonId} setLessonData={handleLessonData} />
    </>
  );
}

export default App;
