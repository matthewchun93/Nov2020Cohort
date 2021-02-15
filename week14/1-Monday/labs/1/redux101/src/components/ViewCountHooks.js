import React from 'react'
import {useSelector} from 'react-redux';    

const ViewCountHooks = () => {
    const count = useSelector(state => state.count);
    return (
        <>
        <h1>View Count Hooks</h1>
        
        <h3>{count}</h3>

        </>
    )
}

export default ViewCountHooks
