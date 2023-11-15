import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDeletedQuestion}) 
{

  //Mapping through the array of questions
  const mappedQuestions=questions.map(question =>
    {
      return (
        <QuestionItem question={question} handleDeletedQuestion={handleDeletedQuestion}/>
      )
    })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        {mappedQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
