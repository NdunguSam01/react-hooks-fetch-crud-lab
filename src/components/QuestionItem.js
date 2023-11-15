import React from "react";

function QuestionItem({ question, handleDeletedQuestion }) 
{
  const { id, prompt, answers, correctIndex } = question;


  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  //Function to delete question from the DB
  function deleteQuestion (deletedQuestion)
  {
    console.log(deletedQuestion)
    
    //Making the DELETE request
    fetch(`http://localhost:4000/questions/${deletedQuestion.id}`,
    {
      method : "DELETE",
    })
      .then(response => response.json())
      .then(()=> handleDeletedQuestion(question))
  }

  return (
    <li key={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={()=>deleteQuestion(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
