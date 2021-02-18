//this is an action creator and it returns an object

export const increment = (n) => {

    return {
        type: "INCREMENT",
        data: n
    }
}

//this is not a named export
//when we import inot our componenets we have to import like this
/*
import {increment} from './path'

named export
export default increment

import increment from './path'
*/