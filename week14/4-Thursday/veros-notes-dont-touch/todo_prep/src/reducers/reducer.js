const initialState = {
  todos: [{
    id: 1,
    task: "Buy some water",
    editMode: false
  }]
  
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.data]
      }
    case "UPDATE":

      let arrCopy = [...state.todos];
      let index = arrCopy.findIndex(todo => todo.id === action.data.id);
      arrCopy[index] = action.data;

      return {
        ...state,
        todos: arrCopy
      }
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case "SET_EDIT_MODE":
      console.log(`reducer id: ${action.id} status: ${action.status}`);
      let newArr = [...state.todos];
      
      let idx = newArr.findIndex(todo => todo.id === action.id);
      newArr[idx].editMode = action.status;
      return {
        ...state, 
        todos: newArr
      }

    default:
      return state;
  }
};

export default reducer;
