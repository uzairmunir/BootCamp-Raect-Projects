import React from 'react';
import { AnswerObject } from '../../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  questionNr: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard: React.FC<Props> = ({
  question,
  questionNr,
  answers,
  userAnswer,
  callBack,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p>
        Question {questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callBack}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

export default QuestionCard;
