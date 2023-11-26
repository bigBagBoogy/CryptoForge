// LessonTextBox.jsx

import React from 'react';


const LessonTextBox = ({ lessonContent }) => {
  return (
    <div className="lesson-textbox">
      <p>
      Starting with the absolute basics:

Solidity's code is encapsulated in contracts. A contract is the fundamental building block of Ethereum applications — all variables and functions belong to a contract, and this will be the starting point of all your projects.

An empty contract named HelloWorld would look like this:

contract HelloWorld {

}
        {lessonContent}
      </p>
    </div>
  );
};

export { LessonTextBox };
