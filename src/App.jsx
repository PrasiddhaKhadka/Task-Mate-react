import viteLogo from '/vite.svg'
import './App.css'
import  { HeaderTask }  from './components/HeaderTask.jsx'
import { AddTask } from './components/AddTask.jsx'
import { ShowTask } from './components/ShowTask.jsx';
import { useState, useEffect } from 'react';

// import ShowTask from './components/ShowTask.jsx'

function App() {
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
    const [task, setTask] = useState({ id: null, name: "" });
    
    useEffect(() => {
      localStorage.setItem('taskList', JSON.stringify(taskList));
    },[taskList])


  return (
    <div className='App'>
    <HeaderTask />
    <AddTask taskList={taskList}  setTaskList={setTaskList} task={task} setTask={setTask}/>
    <ShowTask taskList={taskList}  setTaskList={setTaskList} task={task} setTask={setTask}/>
    {/* <h1>Hello World</h1> */}
    </div>
  )
}

export default App
