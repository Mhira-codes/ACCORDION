import React, { useState } from "react";
import './App.css';
import {questionsDetails} from "./components/data"
import Question from "./components/Question/Question";
function App() {

  const [questions, setQuestions] =useState(questionsDetails)
  return (
    <main className="App  ">
      
<div className="container">
<h3>Questions and Answers On Agriculture</h3>
<section>
  {questions.map((question)=>{
return <Question key={question.id} {...question}/>
  })}
</section>
</div>


    </main>
  );
}

export default App
