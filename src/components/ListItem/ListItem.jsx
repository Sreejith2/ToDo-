import React, { useState } from 'react'
import "./ListItem.css"
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, marktask } from '../../redux/list'
function ListItem(props) {
  const [task,setTask] = useState('')
  const [edit,setEdit] = useState(false)
  const [done,setDone] = useState(props.status)
  const dispatch = useDispatch()
  return (
    <div>
        <div className='listItem'>
            {!edit?<li className={`item ${done ? 'done' : ''}`}>{props.task}</li>:
            <div>
              <input className='editInput' onChange={(e)=>setTask(e.target.value)} placeholder='Enter task here'></input>
            </div>
            }
            {edit?<button onClick={()=>{
              dispatch(editTask({id:props.id,text:task}))
              setDone(false)
              setEdit(prev=>!prev)
            }} className='itemButton'>Save</button>:
              <div className='itemButtonContainer'>
                  <button onClick={()=>{
                    setDone(prev=>!prev)
                    dispatch(marktask({id:props.id,status:done}))
                  }} className='itemButton'>Done</button>
                  <button onClick={()=>{
                    setEdit(prev=>!prev)
                  }} className='itemButton'>Edit</button>
                  <button onClick={()=>{
                    dispatch(deleteTask(props.id))
                  }} className='itemButton'>Delete</button>
              </div>
            }
        </div>
        <hr/>
    </div>
  )
}

export default ListItem