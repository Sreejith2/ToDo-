import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    tasks :[],
}

const listSlice = createSlice({
    name:'list',
    initialState:INITIAL_STATE,
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push({id:Date.now(),text:action.payload,completed:false})
        },
        deleteTask:(state,action)=>{
            state.tasks= state.tasks.filter(task=>task.id!=action.payload)
        },
        editTask:(state,action)=>{
            const task=state.tasks.find(task=>task.id===action.payload.id)
            if(task){
                task.text=action.payload.text
            }
        },
        marktask:(state,action)=>{
            const task = state.tasks.find(task=>task.id===action.payload.id)
            if(task){
                task.completed = action.payload.status
            }
        }
    }
})

export const {addTask,deleteTask,editTask,marktask} = listSlice.actions

export default listSlice.reducer