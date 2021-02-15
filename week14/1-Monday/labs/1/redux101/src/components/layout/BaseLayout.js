import React from 'react'
import {Link} from 'react-router-dom';

const BaseLayout = (props) => {
    return (
        <>
        <Link to="/">Home</Link> &nbsp;&nbsp;
        <Link to="/count">View Count</Link> &nbsp;&nbsp;
        <Link to="/count_hooks">Count Hooks</Link> &nbsp;&nbsp;
        <Link to="/count_view_hooks">View Count Hooks</Link> &nbsp;&nbsp;
        <Link to="/forms">Forms</Link> &nbsp;&nbsp;

        <br/>
        <br/>


        {props.children}
        </>
    )
}

export default BaseLayout
