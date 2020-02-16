import React from 'react'
import { useDrop } from 'react-dnd'
import Task from './Task';

const style = {
  height: '30rem',
  width: '16rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
}

const titleStyle = {
  color: '#333',
  fontWeight: 'bold'
}

const DoneBoard = ({ tasks, setTasks }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'BLOCK',
    drop: (item) => {
      if(item.condition !== 'done') {
        const convertedTasks = tasks.map(task => {
          if(task.id === item.id) {
            return {
              ...task,
              condition: 'done'
            }
          }else {
            return task
          }
        })
        setTasks(convertedTasks);
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  })

  let backgroundColor = '#ededed'
  if (isOver) {
    backgroundColor = '#dbdbdb'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      <div style={titleStyle}>DONE</div>
      {tasks.map(task => {
        if(task.condition === 'done') {
          return <Task key={task.id} name={task.name} id={task.id} tasks={tasks} setTasks={setTasks} />
        }
      })}
    </div>
  )
}

export default DoneBoard
