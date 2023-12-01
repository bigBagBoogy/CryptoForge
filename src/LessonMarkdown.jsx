import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import useLessonMarkdown from './useLessonMarkdown';

const LessonMarkdown = ({ setLessonData }) => {
  const lessonId = '1-1'; // Set the default lesson ID or get it from props if needed
  const { loading, error, lessonData } = useLessonMarkdown(lessonId);

  useEffect(() => {
    // Update the parent component when lessonData changes
    console.log("LessonData inside useEffect:", lessonData);
    setLessonData(lessonData);
  }, [lessonData, setLessonData]);
  

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {lessonData.value !== undefined && <ReactMarkdown>{lessonData.value}</ReactMarkdown>}
    </div>
  );
};

export default LessonMarkdown;
