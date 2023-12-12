import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import useLessonMarkdown from './useLessonMarkdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LessonMarkdown = ({ lessonId, setLessonData }) => {
  const { loading, error, lessonData } = useLessonMarkdown(lessonId);

  useEffect(() => {
    // Update the parent component when lessonData changes
    setLessonData(lessonData);
  }, [lessonData, setLessonData]);

  const renderParagraph = ({ node, children, ...props }) => {
    // Makes text in between "$" aqua color ($this will be aqua$)
    const content = String(children);
    const parts = content.split('$');
    const modifiedContent = parts.map((part, index) => (
      index % 2 === 0 ? (
        part
      ) : (
        <span key={index} style={{ color: 'aqua' }}>
          {part}
        </span>
      )
    ));  
    // Default rendering for paragraphs
    return <p {...props}>{modifiedContent}</p>;
  };

  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={materialDark}
              language={match[1]}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        p: renderParagraph,
      }}
    >
      {lessonData.value}
    </ReactMarkdown>
  );
};

export default LessonMarkdown;