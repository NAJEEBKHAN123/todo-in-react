
import { useState } from 'react'

function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleInputChange(e){
    setNewTask(e.target.value);
  }

function addTask(){
  if(newTask.trim() !== ""){
    setTasks(t => [...t, newTask]);
    setNewTask("");
  }

}

function deleteTask(index){
  const updateTasks = tasks.filter((todo,i) => i !== index)
  // console.log(updateTasks)
    setTasks(updateTasks);
}
  return (
    <>
    
     <div className="container">
      <div className="box">
        <h1>Todo-List</h1>
        
      <div className="inputTextDiv">
        <input type="text" placeholder='Enter any text....' value={newTask} onChange={handleInputChange} className='inputText'/>
        <button className='add-button' onClick={addTask}>Add</button>
      </div>
      <ul>
        {
          tasks.map((task, index) =>
           <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' 
            onClick={() => deleteTask(index)}>Remove</button>
          </li>)
        }
      </ul>
    </div>
    </div> 
    </>
  )
}

export default App;


