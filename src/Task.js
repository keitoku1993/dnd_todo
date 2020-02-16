import React from 'react'
import { useDrag } from 'react-dnd'

const style = {
  border: '1px solid gray',
  borderRadius: '6px',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginTop: '12px',
  cursor: 'move',
  color: '#000',
  position: 'relative'
}

const closeBtn = {
  fontSize: '20px',
  position: 'absolute',
  right: '8px',
  top: '3px',
  cursor: 'pointer'
}

const Task = ({ id, name, setTasks, tasks}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'BLOCK', id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const handleClose = () => {
    setTasks(tasks.filter(task => task.id != id));
  }

  const opacity = isDragging ? 0.2 : 1

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
      <span onClick={() => handleClose()} style={closeBtn}>×</span>
    </div>
  )
}
export default Task
