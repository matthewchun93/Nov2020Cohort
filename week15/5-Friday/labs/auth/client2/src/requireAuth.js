
import React, {Component} from 'react';
import {connect} from 'react-redux';

//HOC

export default(ChildComponent) => {

    //component
    class ComposedComponent extends Component {

        componentDidMount() {
            this.isAuthenticated();
        }

        componenetDidUpdate() {
            this.isAuthenticated();
        }
        //is our user authenticated?
        isAuthenticated = ()=> {
            if (!this.props.auth) {
                //redirect our user back to home page
                this.props.history.push('/'); //redirecting via react-router
            }
        }

        render() {
            return <ChildComponent />
        }
    } // class component

    const mapStateToProps = (state) => {

        return {
            auth: state.auth.authenticated
        }
    }

    return (mapStateToProps, null)(ComposedComponent)
}