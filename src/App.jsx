import viteLogo from '/vite.svg'
import './App.css'
import  { HeaderTask }  from './components/HeaderTask.jsx'
import { AddTask } from './components/AddTask.jsx'
import { ShowTask } from './components/ShowTask.jsx';
import { useState } from 'react';

// import ShowTask from './components/ShowTask.jsx'

function App() {
    const [taskList, setTaskList] = useState([]);
  return (
    <div className='App'>
    <HeaderTask />
    <AddTask taskList={taskList}  setTaskList={setTaskList}/>
    <ShowTask taskList={taskList}  setTaskList={setTaskList} />
    {/* <h1>Hello World</h1> */}
    </div>
  )
}

export default App
