import { createContext, useReducer} from "react";
import quiz from '../data/quiz.json'

const quizData = quiz.quizData;
const timePerTask = quiz.timePerQuestion;
const quizTitle = quiz.quizTitle;

export const QuizContext = createContext({
    tasksState: {
        selectedTask: "",
        taskHistory: []
    },
    timePerTask: 0,
    quizTitle: "",
    quizData: [],
    functions: {
        handleNextQuizState: () => { },
    }
});



function quizTasksReducer(state, action) {

    switch (action.type) {
        case "NEXT_TASK":
            if (state.selectedTask === "start") {
                return { selectedTask: 0, taskHistory: [] }
            }
            if (state.selectedTask === "result") {

                return { selectedTask: "start", taskHistory: [...state.taskHistory] }
            }
            const newSelectedTask = (state.selectedTask + 1);
            const numberOfQuestion = state.selectedTask;
            const question = quizData[state.selectedTask].title;
            const optionTitle = action.payload[1];
            const isCorrect = action.payload[0];
            if ((state.selectedTask + 1) === quizData.length) {
                return {
                    selectedTask: "result", taskHistory: [...state.taskHistory, {
                        numberOfQuestion,
                        question,
                        optionTitle,
                        isCorrect,
                    }]
                }
            }
            return {
                selectedTask: newSelectedTask, taskHistory: [...state.taskHistory, {
                    numberOfQuestion,
                    question,
                    optionTitle,
                    isCorrect,
                }]
            }
        default:
            return state;
    }
}

function QuizContextProvider({ children }) {
    const [tasksState, dispatchTasksState] = useReducer(quizTasksReducer, {
        selectedTask: "start",
        taskHistory: []
    });



    function handleNextQuizState(isCorrect, answear) {
        dispatchTasksState({ type: "NEXT_TASK", payload: [isCorrect, answear] })
    }


    const quizCtx = {
        tasksState,
        timePerTask,
        quizTitle,
        quizData,
        functions: {
            handleNextQuizState,
        }
    }

    return (
        <QuizContext.Provider value={quizCtx}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;