import React from 'react';
import { shuffle } from 'lodash';
import { useLocation } from 'react-router-dom';
import QuestionOne from './QuestionOne';
import QuestionThree from './QuestionThree';
import AlertComp from './AlertComp';

let QuestionTwo: React.ComponentType<any>;

try {
  QuestionTwo = require('../question/QuestionTwo').default;
} catch (error) {
  console.error(error);
  QuestionTwo = () => <p>Error: QuestionTwo component not found.</p>;
}

let QuestionFour: React.ComponentType<any>;

try {
  QuestionFour = require('../question/QuestionFour').default;
} catch (error) {
  console.error(error);
  QuestionFour = () => <p>Error: QuestionFour component not found.</p>;
}

const AllQuestions = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.option) {
    // Render a default component or show an error message if state or option is missing
    return <p style={{fontSize: '50px', color: 'gray', textAlign: 'center', marginTop: '50px'}}>No option selected.</p>;
  }

  // Define an array of questions in the desired order
  const questions = [
    { option: 'option1', component: <AlertComp />},
    { option: 'option2', component: <QuestionOne /> },
    { option: 'option3', component: <QuestionTwo /> },
    { option: 'option4', component: <QuestionThree /> },
    { option: 'option5', component: <QuestionFour /> }
  ];

  // Shuffle the questions array
  const shuffledQuestions = shuffle(questions);

  // Find the selected option in the shuffledQuestions array
  const selectedQuestion = shuffledQuestions.find(
    (question: { option: any; }) => question.option === state.option
  );

  // Render the selected question component
  return (
    <>
      {selectedQuestion ? (
        selectedQuestion.component
      ) : (
        <p>No question selected.</p>
      )}
    </>
  );
};

export default AllQuestions;
