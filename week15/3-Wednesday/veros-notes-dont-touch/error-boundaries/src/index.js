import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hooks from './components/Hooks';
import Classes from './components/Classes'
import BaseLayout from './components/layout/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducerTemplate';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


const saveToLocalStorage = (reduxGlobalState) => {
// serialization = converting js object to a string
  try{

    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState);
  }
  catch(e){
    console.log(e);
  }
  
}

const loadFromLocalStorage = (params) => {
  const serializeState = localStorage.getItem('state');

  if(serializeState === null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState);  //returns JS object reprsenting local storage
  }
}

const persistedState = loadFromLocalStorage();

// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{

  saveToLocalStorage(store.getState());
})


//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/hooks' component={Hooks}/>
            <Route path='/class' component={Classes}/>
          </Switch>
      </BaseLayout>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
