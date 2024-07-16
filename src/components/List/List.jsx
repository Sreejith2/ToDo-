import React from 'react'
import "./List.css"
import ListItem from '../ListItem/ListItem'
import { useSelector } from 'react-redux'

function List() {
    const list = useSelector((state)=>state.list)
  return (
    <ul className='list'>
        {list.tasks.map((item)=>{
                return <ListItem key={item.id} id={item.id} status={item.completed} task={item.text}/>
            }
        )}
    </ul>
  )
}

export default List