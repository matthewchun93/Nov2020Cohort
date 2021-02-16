
//acton creators: functions that return an object
//add personObj to global State
export const addPerson = (personObj) => {

    return {
        type: 'ADD_PERSON',
        data: personObj
    }
};

export const removePerson = (firstName) => {

    console.log('inside of remove person action');
    return {
        type: 'REMOVE_PERSON',
        data: firstName
    }

};
