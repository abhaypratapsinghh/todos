import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'
import { useState ,useEffect } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
 
    fetch("http://localhost:3000/todo")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json)
       
      })


    
  

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos items={todos}></Todos>
    </div>
    
  )
}

export default App
