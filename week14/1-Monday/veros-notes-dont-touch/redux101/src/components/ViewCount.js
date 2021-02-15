import React, { Component } from "react";
import {connect} from 'react-redux'

class ViewCount extends Component {
  render() {
    return <>
        count holder
        <br />
        <h1>{this.props.count}</h1>
    </>;
  }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, null)(ViewCount);
