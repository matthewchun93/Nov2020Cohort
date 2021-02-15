import React, { Component } from 'react'
import {connect} from 'react-redux';
import increaseAction from './actions/increaseAction';
import decreaseAction from './actions/decreaseAction';
import Persons from './actions/Persons';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Counter Reducer"
    }
  }

  // handleIncrease = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // handleDecrease = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }

  handleCount = () => {
    //update global and local state

    this.setState({
      count: this.state.count + 1
    })
    this.props.onIncreaseClick();
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h1>Global: {this.props.counter}</h1>
        <h1>Local: {this.state.count}</h1>

        <button onClick={this.props.onDecreaseClick}>Decrease</button>
        <button onClick={this.handleCount}>Increase</button>
      </>
    )
  }
} //end of component

//mapping a global state to prop
const mapStateToProps = (state) => {

  return {
    counter: state.count,
    title: state.title,
    persons: state.persons
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    onIncreaseClick: ()=>dispatch(increaseAction()),
    onDecreaseClick: ()=>dispatch(decreaseAction()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
