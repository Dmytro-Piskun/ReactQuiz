import './QuizStart.css'
import { useContext } from "react";
import { QuizContext } from "../../store/QuizContext";

function QuizStart() {
  const QuizCtx = useContext(QuizContext);

    return (
      <section className="quiz-start-container">
<h1>{QuizCtx.quizTitle}</h1>
<h2><strong>{QuizCtx.quizData.length}</strong> Questions</h2>
<h2><strong>{QuizCtx.timePerTask}s</strong> per Each</h2>
<button onClick={QuizCtx.functions.handleNextQuizState}>Start Quiz</button>
      </section>
    )
  }
  
  export default QuizStart;
  