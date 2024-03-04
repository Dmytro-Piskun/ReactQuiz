import QuizResult from "../QuizResult/QuizResult";
import QuizTask from "../QuizTask/QuizTask";
import QuizStart from "../QuizStart/QuizStart";
import { useContext,useEffect } from "react";
import { QuizContext } from "../../store/QuizContext";

import './QuizContent.css'

function QuizContent() {
const QuizCtx = useContext(QuizContext);

// useEffect(()=>{
// if(QuizCtx.tasksState.selectedTask!=="start"&&QuizCtx.tasksState.selectedTask!=="result"){
//   console.log("start timer");
//   handleQuiztimer();
// }
// },[QuizCtx.tasksState.selectedTask])


// function handleQuiztimer(){
//     const taskTimer = setTimeout(() => {
//     QuizCtx.functions.handleNextQuizState("timeout",false);
//     // return ()=>{
//     //   clearTimeout(taskTimer);
//     // }
// }, QuizCtx.timePerTask * 1000)
// }

    return (
      <main className="quiz-content-container">
            <section className="quiz-content">
              {QuizCtx.tasksState.selectedTask==="start"&&<QuizStart></QuizStart>}
              {(QuizCtx.tasksState.selectedTask!=="start"&&QuizCtx.tasksState.selectedTask!=="result")&&<QuizTask></QuizTask>}
              {QuizCtx.tasksState.selectedTask==="result"&&<QuizResult></QuizResult>}

            </section>
      </main>
    )
  }
  
  export default QuizContent;
  