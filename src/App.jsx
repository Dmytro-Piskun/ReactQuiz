import './App.css'
import QuizContent from './components/QuizContent/QuizContent'
import QuizContextProvider from './store/QuizContext'

function App() {

  return (
    <QuizContextProvider>
          <QuizContent/>
    </QuizContextProvider>
  )
}

export default App
