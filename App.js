import React from 'react';
import {Provider} from 'react-redux'
import store from './store/index'
import './mock/index'
import {
  BrowserRouter,
  Redirect,
  Route,
  // NavLink,
  Switch
} from 'react-router-dom'
import Home from './views/home/Home'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/home" component={Home}/>
            <Redirect form="/" to="/home"/>
          </Switch>
        </div>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
