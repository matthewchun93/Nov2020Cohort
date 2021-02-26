
import React, { Component } from 'react'

class ErrorBoundaries extends Component {

    constructor() {
        super();

        this.state = {
            error: false
        }
        
    }

    //lifecycle method

    static getDerivedStateFromError(error){
        return {error: true}
    }

  render() {

    if(this.state.error){
        return (
            <div>
                <h2>Woops...there was an error</h2>
            </div>
        )
    }
    
    return this.props.children 
  }
}

export default ErrorBoundaries
