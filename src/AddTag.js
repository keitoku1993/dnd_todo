import React, { useState } from 'react';
import { directive } from '@babel/types';

const AddTag = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = e => {
    if(e.charCode === 13) {
      setInputValue('');
      let maxId = 0;
      tasks.forEach(task => {
        if(task.id > maxId) {
          maxId = task.id;
        }
      })
      const newTask = {
        name: inputValue,
        id: maxId + 1,
        condition: 'todo'
      }
      setTasks([...tasks, newTask])
    }
  }

  return (
    <div style={{margin: '20px'}}>
      <div>react-dnd</div>
      <input
        type='text' value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyPress={e => handleKeyPress(e)}
      />
    </div>
  )
}

export default AddTag;