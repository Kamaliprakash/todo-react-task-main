import React,{useState} from 'react'
import Todo from './components/Todo'

function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:" Office Task-1",
    description:"This completes the First Office Task Process.",
    status:false

  },
  {
    id:2,
    title:" Office Task-2",
    description:"This concept is the second office task.",
    status:true
    
  },
  {
    id:3,
    title:" Office Task-3",
    description:"This completes the third office task.",
    status:false
    
  }
])
let [completed,setCompleted]=useState('All')
  return <>
  <Todo todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
}

export default App