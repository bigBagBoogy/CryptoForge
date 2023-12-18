// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Editor } from '@monaco-editor/react';
import { LessonCodeBuilder } from './LessonCodeBuilder';
import { LessonAnswer } from './LessonAnswer';
import LessonMarkdown from './LessonMarkdown';
import Navbar from './Navbar';
import CustomAlert from './CustomAlert';

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
  const [answer, setAnswer] = useState({
    id: 'default',
    value: '',
  });
  setAnswer
  const totalLessons = 3;
  const [isCustomAlertOpen, setIsCustomAlertOpen] = useState(false);
  const [correctness, setCorrectness] = useState(false);
  const editorRef = useRef(null);

  // useEffect(() => {
  //   console.log("File state after update:", file);
  // }, [file]);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {  // remove whitespace  ↓ ↓ ↓ ↓ ↓ ↓ 
      const editor = editorRef.current.getValue().trim().replace(/\s+/g, '');
      const answerWithoutWhitespace = answer.value.trim().replace(/\s+/g, '');
      
      setCorrectness(editor === answerWithoutWhitespace);
      setIsCustomAlertOpen(true);
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
  function handleLessonAnswer(answerData) {
    // Update the file state with the markdown data
    setAnswer(answerData);  
  }

  return (
    <>
      {/* Use the Navbar component and pass the setLessonId function */}
      <Navbar lessonId={lessonId} setLessonId={setLessonId} totalLessons={totalLessons} />
      <button onClick={() => getEditorValue()}>check answer</button>
      <CustomAlert
        isOpen={isCustomAlertOpen}
        onClose={() => setIsCustomAlertOpen(false)}
        message={correctness ? 'Correct!' : 'Incorrect!'}
        correctness={correctness}
      />
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
      {/* Render the LessonCodeBuilder component and pass the lesson ID and handler function */}
      <LessonCodeBuilder lessonId={lessonId} setLessonData={handleLessonCode} />
      <LessonAnswer lessonId={lessonId} setLessonData={handleLessonAnswer} setLessonAnswer={setAnswer} />
    </>
  );
}

export default App;
