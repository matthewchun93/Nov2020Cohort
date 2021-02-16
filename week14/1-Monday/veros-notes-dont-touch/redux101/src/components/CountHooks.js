
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import increaseAction from '../actions/increaseAction';
import decreaseAction from '../actions/decreaseAction';

const CountHooks = (props) => {

    const dispatch = useDispatch(); //access to dispatch function
    const count = useSelector(state => state.count);

  return (
    <>
      <h1>Count Hooks</h1>
        <h2>{count}</h2>

        <button onClick={()=>dispatch(increaseAction())}>Increase</button>
        <button onClick={()=>dispatch(decreaseAction())}>Decrease</button>
    </>
  )
}

export default CountHooks
