// LessonBuilder.jsx
import React, { useState, useEffect } from 'react';
const LessonBuilder = ({ lessonId, setLessonData }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lessonData, setLocalLessonData] = useState({ id: '', value: '' });
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        try {
          const backendEndpoint = `http://localhost:3000/lessonCode/${lessonId}`;
          const response = await fetch(backendEndpoint);
          const data = await response.json();
          // Ensure that lessonData has the correct properties
          const lessonData = { id: lessonId, value: data.solidityCode };
          // console.log(lessonData); //  I now have access to the lesson data here***            

  
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
      if (lessonData.id !== setLessonData.id || lessonData.value !== setLessonData.value) {
        setLessonData(lessonData);
      }
    }, [lessonData, setLessonData]);
  
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {/* Add JSX components to display lesson data if needed */}
      </div>
    );
  };
  
  export { LessonBuilder };
  
