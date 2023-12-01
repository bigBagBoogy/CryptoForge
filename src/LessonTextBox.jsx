// LessonTextBox.jsx

import React from 'react';
import ReactMarkdown from 'react-markdown';

const LessonTextBox = ({ lessonContent }) => {
  // Custom components to apply styles to code blocks
  const components = {
    code: ({ node, inline, className, children, ...props }) => {
      // Check if the language is 'solidity'
      if (!inline && className && className.toLowerCase() === 'language-solidity') {
        return (
          <div className="solidity-code">
            <code>{children}</code>
          </div>
        );
      }
      // If not 'solidity', use default rendering
      return <code className={className} {...props}>{children}</code>;
    },
  };

  return (
    <div className="lesson-textbox">
      <ReactMarkdown components={components}>
        {`
## Starting with the absolute basics:

\`\`\`solidity
contract HelloWorld {

}
\`\`\`

Solidity's code is encapsulated in contracts. A contract is the fundamental building block of Ethereum applications — all variables and functions belong to a contract, and this will be the starting point of all your projects.
        `}
      </ReactMarkdown>
    </div>
  );
};

export { LessonTextBox };
