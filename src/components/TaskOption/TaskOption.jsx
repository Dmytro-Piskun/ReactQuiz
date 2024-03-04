import './TaskOption.css'

function TaskOption({children, onClick,isCorrect}) {

    return (
      <section onClick={()=>onClick(isCorrect,children)} className='task-option'>
      {children}
      </section>
    )
  }
  
  export default TaskOption;
  