import React, { useState } from 'react'
import "./ListInput.css"
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/list'

function ListInput() {
  const [task,setTask] = useState("")
  const dispatch = useDispatch()
  return (
    <div className='inputContainer'>
      <input value={task} onChange={(e)=>setTask(e.target.value)} className='listInput' placeholder='Enter task her...' />
      <button onClick={()=>{
        dispatch(addTask(task))
        setTask('')
        }} className='listInputButton'>Add</button>
    </div>
  )
}

export default ListInput