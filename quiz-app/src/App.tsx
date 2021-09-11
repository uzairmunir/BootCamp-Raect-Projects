import React, { useState } from 'react';
import { GlobalStyle, Wrapper } from './App.styles';
import {
  fetchQuestions,
  Difficulty,
  QuestionState,
} from './components/api/Api';
import QuestionCard from './components/QuestionCard/QuestionCard';

// Answer Type
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const Total_Question = 10;
const App = () => {
  // UseStates
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  // Function to Start Quiz
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    let newQuestions = await fetchQuestions(Total_Question, Difficulty.Easy);
    setQuestions(newQuestions);
    setUserAnswer([]);
    setScore(0);
    setNumber(0);
    setLoading(false);
  };
  // Function to Display Next Question
  const nextQuestion = () => {
    const nextQues = number + 1;
    if (nextQues === Total_Question) {
      setGameOver(true);
    } else {
      setNumber(nextQues);
    }
  };
  //Function to Check Correct Answer
  const checkAnswer = (e: any) => {
    if (!gameOver) {
      //Users Answer
      const answer = e.currentTarget.value;
      //Check Correct Answer
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      //Save answer in the array of user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {/* Quiz Start Button */}
        {gameOver || userAnswer.length === Total_Question ? (
          <button className='start' onClick={startQuiz}>
            Start Quiz
          </button>
        ) : null}
        {/* Score */}
        {!gameOver ? <p>Score :{score}</p> : null}
        {loading ? <p>....Loading</p> : null}
        {/* Question Card */}
        {!gameOver && !loading ? (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={Total_Question}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callBack={checkAnswer}
          />
        ) : null}
        {/*Next Question Button */}
        {!gameOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== Total_Question - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
