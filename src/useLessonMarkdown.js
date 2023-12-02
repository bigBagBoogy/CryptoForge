// useLessonMarkdown.js
import { useState, useEffect } from "react";

const useLessonMarkdown = (lessonId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lessonData, setLessonData] = useState({ id: "", value: "" });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const backendEndpoint = `http://localhost:3000/lessonText/${lessonId}`;
        const response = await fetch(backendEndpoint);
        const data = await response.json();

        const lessonData = { id: lessonId, value: data.markdownCode };

        setLessonData(lessonData);
        setError(null);
      } catch (error) {
        console.error("Error fetching lesson data:", error.message);
        setError("Error fetching lesson data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lessonId]);

  return { loading, error, lessonData };
};

export default useLessonMarkdown;
