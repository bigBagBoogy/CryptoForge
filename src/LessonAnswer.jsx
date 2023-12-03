// LessonAnswer.jsx

// When do want to fetch this data?
// 1. When a new lesson is selected or
// 2. When a lesson is submitted?

import React, { useState, useEffect } from 'react';

const LessonAnswer = ({ lessonId, setLessonData, setLessonAnswer }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localLessonData, setLocalLessonData] = useState({ id: '', value: '' }); // Changed variable name here

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const backendEndpoint = `http://localhost:3000/lessonAnswers/${lessonId}`;
        const response = await fetch(backendEndpoint);
        const data = await response.json();
        // Ensure that lessonData has the correct properties
        const lessonData = { id: lessonId, value: data.answerCode };
        console.log(lessonData);

        setLessonAnswer(lessonData.value);
        setLocalLessonData(lessonData);
        setError(null);
      } catch (error) {
        console.error('Error fetching lesson data:', error.message);
        setError('Error fetching lesson data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lessonId]);

  useEffect(() => {
    // Update the parent component only if there's a change in lessonData
    if (localLessonData.id !== setLessonData.id || localLessonData.value !== setLessonData.value) {
      setLessonData(localLessonData);
    }
  }, [lessonId, setLessonAnswer, localLessonData, setLessonData]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {/* Add JSX components to display lesson data if needed */}
    </div>
  );
};

export { LessonAnswer };
