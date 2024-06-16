import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import FullScreenPrompt from './FullscreenPrompt';
import quizData from '../json/quizData.json';

const QuizApp = ({onNextQuestion }) => {
    const [selectedOption, setSelectedOption] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(600);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [fullScreenEnabled, setFullScreenEnabled] = useState(false);

  useEffect(() => {
    setQuestions(quizData);
    const savedIndex = localStorage.getItem('quizCurrentIndex');
    const savedTime = localStorage.getItem('quizTimer');

    if (savedIndex !== null && !isNaN(savedIndex)) {
      setCurrentIndex(parseInt(savedIndex));
    }

    if (savedTime !== null && !isNaN(savedTime)) {
      setTimer(parseInt(savedTime));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizCurrentIndex', currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem('quizTimer', timer);
  }, [timer]);

  const startQuiz = () => {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
      setFullScreenEnabled(true);
    } else {
      alert('Full screen mode is required to take the quiz.');
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedOption !== '') {
      onNextQuestion(selectedOption); // Call parent component's function to handle answer submission
      setSelectedOption(''); // Clear selected option after submission
    } else {
      alert('Please select an option before submitting.');
    }
  };
  return (
    <div className="quiz-app">
      {!fullScreenEnabled && <FullScreenPrompt onStartQuiz={startQuiz} />}
      {fullScreenEnabled && (
        <Quiz
          questions={questions}
          currentIndex={currentIndex}
          onNextQuestion={handleAnswerSubmit}
        />
      )}
      <div className="timer">{Math.floor(timer / 60)}:{(timer % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</div>
    </div>
  );
};

export default QuizApp;
