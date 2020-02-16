import React, { useState, useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import AddTag from './AddTag';
import TodoBoard from './TodoBoard';
import ProgressBoard from './ProgressBoard';
import DoneBoard from './DoneBoard';

const containerStyle = {
  display: 'flex',
  width: '980px',
  justifyContent: 'space-around'
}

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
  
	return (
		<div className="App">
			<DndProvider backend={Backend}>
        <AddTag tasks={tasks} setTasks={setTasks} />
        <div style={containerStyle}>
          <TodoBoard tasks={tasks} setTasks={tasks => setTasks(tasks)} />
          <ProgressBoard tasks={tasks} setTasks={tasks => setTasks(tasks)} />
          <DoneBoard tasks={tasks} setTasks={tasks => setTasks(tasks)} />
        </div>
			</DndProvider>
		</div>
	)
}

export default App;
