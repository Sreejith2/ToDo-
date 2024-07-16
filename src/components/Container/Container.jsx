import React from 'react'
import ListInput from '../ListInput/ListInput'
import "./Container.css"
import List from '../List/List'

function Container() {
  return (
    <div className='container'>
        <ListInput/>
        <List/>
    </div>
  )
}

export default Container