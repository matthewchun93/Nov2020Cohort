import React, { Component } from 'react'
import {connect} from 'react-redux';

class ViewCount extends Component {
    render() {
        return (
        <>
            View Holder
            <br/>
            <h1>{this.props.count}</h1>
        </>
        )
    }
}

const maptStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(maptStateToProps, null)(ViewCount);
