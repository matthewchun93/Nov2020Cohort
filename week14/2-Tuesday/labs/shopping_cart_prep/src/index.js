import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './components/Cart';
import Products from './components/Products'
import BaseLayout from './components/layout/BaseLayout'
import {Provider} from 'react-redux';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//redux
import {createStore} from 'redux'; //Redux.createStore()
import {Provider} from 'react-redux';

let store = createStore() //initialize redux-reducer

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/products' component={Products}/>
            
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

