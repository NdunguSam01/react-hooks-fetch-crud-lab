import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions]= useState([])

  useEffect(()=>
  {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(questionsData => setQuestions(questionsData))
  },[])

  //Function to update questions state once a new question is added
  function handleAddedQuestion(newQuestion)
  {
    //Updating the questions state by adding the new question
    setQuestions([...questions, newQuestion])
  }

  //Function to handle deleted question
  function handleDeletedQuestion (deletedQuestion)
  {
    //Filtering to get all questions apart from the deleted one
    const newQuestions=questions.filter(question => question.id !== deletedQuestion.id)

    //Setting the state of questions to equal the results of the filter
    setQuestions(newQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddedQuestion={handleAddedQuestion}/> : <QuestionList questions={questions} handleDeletedQuestion={handleDeletedQuestion}/>}
    </main>
  );
}

export default App;
