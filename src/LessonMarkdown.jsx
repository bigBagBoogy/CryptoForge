// src/LessonMarkdown.jsx
import React, { useState, useEffect } from 'react';

const getMarkdown = ({ lessonId, setLessonData }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lessonData, setLocalLessonData] = useState({ id: '', value: '' });
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        try {
          const backendEndpoint = `http://localhost:3000/lessonText/${lessonId}`;
          const response = await fetch(backendEndpoint);
          const data = await response.json();
          // Ensure that lessonData has the correct properties
          const lessonData = { id: lessonId, value: data.solidityCode };
          console.log(lessonData); //  I now have access to the lesson data here***            

  
          setLocalLessonData(lessonData);
          setError(null);
        } catch (error) {
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
  