import React, { useRef } from 'react'
import './Quiz.css'

const quizData = [
  { question: "Capital of India?", options: ["Mumbai", "Delhi", "Kolkata"], correct: "Delhi" },
  { question: "2 + 2 = ?", options: ["3", "4", "5"], correct: "4" },
  { question: "Color of the sky?", options: ["Blue", "Green", "Red"], correct: "Blue" }
]

const Quiz = () => {
  const answersRef = useRef([]);

  const checkAns = (e, correctAns, selectedOption, index) => {
    answersRef.current[index] = selectedOption;

    const options = e.target.parentElement.querySelectorAll('li');
    options.forEach(opt => opt.classList.remove("correct", "wrong"));

    if (selectedOption === correctAns) {
      e.target.classList.add("correct");
    }
    else {
      e.target.classList.add("wrong");
    }
  }

  const handleSubmit = () => {
    let correctAnswer = 0;

    quizData.forEach((question, index) => {
      if (answersRef.current[index] === question.correct) {
        correctAnswer++;
      }
    })
    alert(`RESULT: ${correctAnswer}/${quizData.length}`);
  };
  return (
    <div>
      <div className='container'>
        <h1>Quiz</h1>
        <hr />
        <div className='data'>
          {
            quizData.map((question, index) => <div className="ques" key={index}><p><strong>{index + 1}.   {question.question}</strong></p>
              <ul >
                {
                  question.options.map((option, i) => (<li onClick={(e) => checkAns(e, question.correct, option, index)} className='optio' key={i}>{option}</li>

                  ))
                }
              </ul>
            </div>)
          }
        </div>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Quiz
