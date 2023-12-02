import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import useLessonMarkdown from './useLessonMarkdown';

const LessonMarkdown = ({ lessonId, setLessonData }) => {
  const { loading, error, lessonData } = useLessonMarkdown(lessonId);

  useEffect(() => {
    // Update the parent component when lessonData changes
    setLessonData(lessonData);
  }, [lessonData, setLessonData]);
  

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {lessonData.value !== undefined ? (
        <ReactMarkdown>{lessonData.value}</ReactMarkdown>
      ) : (
        <p>No data available for the current lesson.</p>
      )}
    </div>
  );
};

export default LessonMarkdown;
