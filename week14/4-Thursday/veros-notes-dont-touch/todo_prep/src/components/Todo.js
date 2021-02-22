import React from "react";
import {Paper} from './Styles';
import TodoList from './TodoList';
import TodoForm from './TodoForm'

const Todo = () => {
  return <>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <h1 className="text-center">todo list</h1>
            </div>
            {/* end of col */}
        </div>
        {/* end of row */}

        <div className="row">
            <div className="col-6 offset-3 py-5">
                <Paper height="auto" width="100%">
                    <TodoForm pageType="0" editMode={false} />
                </Paper>
            </div>
            {/* end of col */}
        </div>
        {/* end of row */}

        <div className="row">
            <div className="col-6 offset-3">
                <TodoList />
            </div>
        </div>
    </div>
    {/* end of container fluid */}
    

  </>;
};

export default Todo;
