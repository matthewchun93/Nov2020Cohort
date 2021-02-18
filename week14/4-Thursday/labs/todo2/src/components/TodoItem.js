import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpanBadge, ShowHideDiv } from "./Styles";
import TodoForm from './TodoForm'
import {deleteTodo, setEditMode} from '../actions/index'


const TodoItem = ({todo}) => {
    
    const dispatch = useDispatch();

    return (
        <>
        <li>
            <div className="row pr-3">
                <div className="col-10">
                    {
                        todo.editMode
                        ?
                        <TodoForm todo={todo} editMode={todo.editMode} pageType={1} /> 
                        :
                        todo.task
                    }
                </div>
                <div className="col-2 text-right pr-2">
                    <button className="button btn" onClick={()=>dispatch(setEditMode(todo.id, true))} >
                        <SpanBadge>
                            <FontAwesomeIcon icon={["fas", "pencil-alt"]} color="orange" />
                        </SpanBadge>
                    </button>
                    <button className="button btn" onClick={()=>dispatch(deleteTodo(todo.id))}>
                        <SpanBadge>
                            <FontAwesomeIcon icon={["fas", "trash"]} color="gray" />
                        </SpanBadge>
                    </button>
                </div>
            </div>

        </li>
        </>
    );
};

export default TodoItem;