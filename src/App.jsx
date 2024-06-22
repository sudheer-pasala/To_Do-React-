import React from 'react'
import './App.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [todo, setodo]=useState([{task:"Sample-Task", id:uuidv4(),isDone:false}]);
  let [input, setinput]=useState("");
  let fetchTask = (event)=>{
    setinput(event.target.value);
  };

  let addTask=()=>{
    setodo((prevTodos)=>{
      return[...prevTodos, {task:input, id:uuidv4() ,isDone:false}];
    });
    setinput("");
  };
  let MarkAsDone = (id)=>{
    setodo((prevTodos)=>prevTodos.map((todo)=>{
      if(todo.id==id){
        return{
          ...todo,
          isDone:true,
        };
      }else{
        return todo;
      }
    }));
  };


  let deleteTodo=(id)=>{
    setodo((prevTodos)=>todo.filter((prevTodos) => prevTodos.id!=id ));
  };

  let MarkAllDone =()=>{
    setodo((prevTodos)=>
      prevTodos.map((todo)=>{
        return {
            ...todo,
            isDone:true
        }
      })

    );
  };
  return (
    <>
    <div>
    <h1 >TO_DO</h1>
    <h5>Plan in a way no one can beat you...</h5>
    </div>
    <div>
      <input  placeholder="enter your task" type="text" value={input} onChange={fetchTask}></input>
      <button className="btn-AddTask" onClick={addTask}>AddTask</button>

      <h3> Tasks to DO..</h3>
     
    </div>
    <div>
      <ol>
        {
          todo.map((todo)=>(
            <li key={todo.id} className="listItem"><span style={todo.isDone? {textDecoration:"line-through"}:{}} >{todo.task}
                      <button onClick={()=>MarkAsDone(todo.id)}>Mark As Done</button>
           <button id ="Del" onClick={()  =>deleteTodo(todo.id)}><i className="fa-solid fa-trash" id="delete"></i></button> </span>
 </li>
          ))
        }

      </ol>
      <button onClick={MarkAllDone}>Mark All As Done..</button>
    </div>
   
    </>
  );
}

export default App
