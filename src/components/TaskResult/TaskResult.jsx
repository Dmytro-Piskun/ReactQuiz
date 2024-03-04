import { useContext} from "react";
import { QuizContext } from "../../store/QuizContext";
import './TaskResult.css'

function TaskResult({index,question,answer,isCorrect}) {

const QuizCtx = useContext(QuizContext);
let answearStyle={};
if(isCorrect===true){
answearStyle={color: "green"};
}
else if(isCorrect===false){
  answearStyle={color: "red"};
}
else{
  answearStyle={color: "darkorange"};
}

    return (
      <li className="task-result">
       <h2>{index+1}. {question}</h2>
       <p style={answearStyle}>{answer}</p> 
      </li>
    )
  }
  
  export default TaskResult;
  