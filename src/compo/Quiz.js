import React, { useState, useRef } from 'react';

const Quiz = ({ questions, currentIndex, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const question = questions[currentIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption !== '') {
        onNextQuestion(selectedOption);
        setSelectedOption(''); // Clear selected option after submission
      } else {
        alert('Please select an option before submitting.');
      }
    };

  return (
    <div className="quiz">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="quizOption"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Quiz;
