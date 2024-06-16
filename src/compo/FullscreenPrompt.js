import React from 'react';

const FullScreenPrompt = ({ onStartQuiz }) => {
  const enableFullScreen = () => {
    document.documentElement.requestFullscreen();
    onStartQuiz();
  };

  return (
    <div className="full-screen-prompt">
      <p>Full screen mode is required to take the quiz.</p>
      <button onClick={enableFullScreen}>Enable Full Screen</button>
    </div>
  );
};

export default FullScreenPrompt;
