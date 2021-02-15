
//action creators: functinos that return an object
//adding personObj to  global state
export const addPerson = (personObj) => {

    return {
        type: "ADD_PERSON",
        data: personObj,
    }
}

export const removePerson = (firstName) => {

    return {
        type: "REMOVE_PERSON",
        data: firstName,
    }
}