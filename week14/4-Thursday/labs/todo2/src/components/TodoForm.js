import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { v1 as uuidv1 } from "uuid";
import {addTodo, updateTodo, setEditMode} from '../actions'

const TodoForm = ({todo, editMode, pageType}) => {
  
  const [task, setTask] = useState(()=> editMode ? todo.task : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    //add an object to our todos
    let todoID = editMode ? todo.id : uuidv1();

    let todoItem = {
      id: todoID,
      task: task,
      editMode: false
    }

    editMode ? dispatch(updateTodo(todoItem)) : dispatch(addTodo(todoItem));
    
    //clear input field
    setTask('');
    
  }

  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">To Do</span>
          </div>
          
          <textarea name="task" 
            className="form-control" 
            aria-label="With textarea"
            onChange={(e)=>setTask(e.target.value)}
            value={task} 
            placeholder="Enter a todo item..."></textarea>

          {
          editMode && pageType === 1 
          ?
            <>
            <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit" id="button-addon2">Edit</button>
            </div>
            <div className="input-group-append">
            <button className="btn btn-outline-danger"
              onClick={()=>dispatch(setEditMode(todo.id, false))} 
              type="button" id="button-addon2">Cancel</button>
            </div>
            </>
            :
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
            </div>
          }
        </div>
      </form>
    </>
  );
};

export default TodoForm;