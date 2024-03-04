import { useContext, useEffect } from "react";
import { QuizContext } from "../../store/QuizContext";
import TaskResult from "../TaskResult/TaskResult";
import './QuizResult.css';

function QuizResult() {

  const QuizCtx = useContext(QuizContext);

  return (
    <section className="quiz-result-container">
      <h1>You got <strong>{QuizCtx.tasksState.taskHistory.filter((task)=>task.isCorrect===true).length}</strong> out of <strong>{QuizCtx.quizData.length}</strong> right</h1>
      <ul className="task-results">        {QuizCtx.tasksState.taskHistory.map((task, index) => {
        return <TaskResult key={task.numberOfQuestion} index={index} question={task.question} answer={task.optionTitle} isCorrect={task.isCorrect}></TaskResult>
      })}
      </ul>
      <button onClick={QuizCtx.functions.handleNextQuizState}>Try again</button>
    </section>
  )
}

export default QuizResult;
