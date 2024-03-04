import './TaskTitle.css'
import TaskTimer from '../TaskTimer/TaskTimer';
import { useContext } from "react";
import { QuizContext } from "../../store/QuizContext";

function TaskTitle() {
  const QuizCtx = useContext(QuizContext);


  return (
    <section className='task-title-container'>
      <p className='task-title-question-number'>Question {QuizCtx.tasksState.selectedTask+1} of {QuizCtx.quizData.length}</p>
      <p className='task-title-question'>{QuizCtx.quizData[QuizCtx.tasksState.selectedTask].title}</p>
      <TaskTimer></TaskTimer>
    </section>
  )
}

export default TaskTitle;