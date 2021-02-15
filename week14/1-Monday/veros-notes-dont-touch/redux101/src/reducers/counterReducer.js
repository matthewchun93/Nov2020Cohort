let initialState = {
  count: 50,
  title: 'Counter App',
  persons: []
};

const counterReducer = (state, action) => {
  if (state === undefined) {
    state = initialState;
  }

  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    case "ADD_PERSON":
     
      return {
        ...state, 
        persons: [...state.persons, action.data]
      }

    case "REMOVE_PERSON":
     console.log('inside of remove person reducer', action.data);
      return {
        ...state, 
        persons: state.persons.filter(person => action.data !== person.firstName )
      }


    default:
      return state;
  }
};

export default counterReducer;
