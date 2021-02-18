
const initialState = {
    counter:0
}

//purpose of reducer is to return a new global state
//reducer must be passed into store
const reducerTemplate = (state = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT': //needs to be the same as action.type in actions
            return {
                ...state,
                counter: state.counter + action.data
            }
        default:
            return state;
    }

}

export default reducerTemplate
