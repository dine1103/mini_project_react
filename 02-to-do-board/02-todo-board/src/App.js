import './App.css';
import Input from './components/Input';
import { useState } from 'react';
function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1>02-To Do Board</h1>
            <Input taskList={taskList} setTaskList={setTaskList}/>
            <div>
              {taskList.map((task, index) => 
              <li key={index}>{task}</li>)}
            </div>
        </div>
    );
}

export default App;
