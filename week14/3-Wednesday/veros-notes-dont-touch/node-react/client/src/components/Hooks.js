
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../actions/templateActions';
import {DivSC,H1S, Paper} from './Styles'

const Hooks = () => {
    //getting global state
    const count = useSelector(state => state.counter);

    // receive dispatch function
    const dispatch = useDispatch();

    useEffect(()=>{

        const getData = async() => {

            let result = await fetch('/api');
            let data = await result.json();

            console.log(data);
        }

        getData();

    }, [])

    return (
        <>
            <H1S>Hooks</H1S>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment(4))}>Click Me</button>
            
            <Paper width="80%" height="50vh" bgc="tomato">
                Here is my paper container
            </Paper>
            <br /><br/>
            <DivSC bgc="red">
                This is a styled component
            </DivSC>      

        </>
    )
}

export default Hooks
