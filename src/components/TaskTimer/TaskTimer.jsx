import './TaskTimer.css'
import { useContext, useEffect ,useRef,useState} from "react";
import { QuizContext } from "../../store/QuizContext";

function TaskTimer() {
  const QuizCtx = useContext(QuizContext);
const [timeElapsed,setTimeElapsed]=useState(QuizCtx.timePerTask*1000);
  useEffect(() => {
    const interval = setInterval(() => {
setTimeElapsed(prevTimeElapsed=>prevTimeElapsed-50)
    },50)
  return () => {
    clearTimeout(interval);
    setTimeElapsed(QuizCtx.timePerTask*1000);
  }
}, [QuizCtx.tasksState.selectedTask])

    return (
      <progress value={timeElapsed} max={QuizCtx.timePerTask*1000} className="task-timer">

      </progress>
    )
  }
  
  export default TaskTimer;
  