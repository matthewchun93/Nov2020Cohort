
import React, { Component } from 'react';
import {connect} from 'react-redux';
import increaseAction from './actions/increaseAction';
import decreaseAction from './actions/decreaseAction';

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
  
  
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>

        <h1>{this.props.counter}</h1>

        <button onClick={this.props.onIncreaseClick}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>
      </>
    )
  }
} //end of component

//mapping global state to prop
const mapStateToProps = (state) => {
  
  return {
    counter: state.count,
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    onIncreaseClick: ()=> dispatch(increaseAction()),
    onDecreaseClick: ()=> dispatch(decreaseAction())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
