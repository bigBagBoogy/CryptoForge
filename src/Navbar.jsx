// Navbar.jsx
import React from 'react';

const Navbar = ({ lessonId, setLessonId, totalLessons }) => {
  const getNextLesson = () => {
    const [chapter, lesson] = lessonId.split('-').map(Number);
    if (lesson < totalLessons) {
      setLessonId(`${chapter}-${lesson + 1}`);
    }
  };

  const getPrevLesson = () => {
    const [chapter, lesson] = lessonId.split('-').map(Number);
    if (lesson > 1) {
      setLessonId(`${chapter}-${lesson - 1}`);
    }
  };

  return (
    <nav>
      <button onClick={getPrevLesson}>Prev Lesson</button>
      <button onClick={getNextLesson}>Next Lesson</button>
    </nav>
  );
};

export default Navbar;
