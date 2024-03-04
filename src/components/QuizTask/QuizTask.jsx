import './QuizTask.css'
import TaskTitle from '../TaskTitle/TaskTitle';
import TaskOption from '../TaskOption/TaskOption';
import { useContext, useEffect } from "react";
import { QuizContext } from "../../store/QuizContext";


function QuizTask() {
  const QuizCtx = useContext(QuizContext);

  useEffect(() => {
      const taskTimer = setTimeout(() => {
        QuizCtx.functions.handleNextQuizState("timeout", "You didn`t answer");
      }, QuizCtx.timePerTask * 1000)
    return () => {
      clearTimeout(taskTimer);
    }
  }, [QuizCtx.tasksState.selectedTask])


  const options = QuizCtx.quizData[QuizCtx.tasksState.selectedTask].options.map((option, index) => {
    return <TaskOption isCorrect={QuizCtx.quizData[QuizCtx.tasksState.selectedTask].options[index].isCorrect} onClick={QuizCtx.functions.handleNextQuizState} key={index}>{option.optionTitle}</TaskOption>
  })
  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  return (
    <>
      <TaskTitle></TaskTitle>
      <section className='quiz-task-options'>
        {shuffleOptions(options)}
      </section>
    </>
  )
}

export default QuizTask;
