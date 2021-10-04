import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import languageReducer from './Store/languageReducer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Pages/Home/index';
import Contact from './Pages/Contact/index';
import Hamburger from './Components/Hamburger/index';
import DarkTheme from './Components/DarkTheme/index';
import { IconContext } from "react-icons";



const store = createStore(
  combineReducers({
  languageReducer,
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
const AppWrapper = () => {
  return (
    <IconContext.Provider value={{ color: "#0C1821", size: '3em', className: "global-Icon" }}>
      <Provider store={store}>
          <App/>
      </Provider>
    </IconContext.Provider>

    )
  }

const App = () => {
  return (
    <>
      <Router>
      < Hamburger />
      < DarkTheme />
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </Router>
    </>
  )
}

ReactDOM.render(
  <AppWrapper />
  , document.getElementById('root'))
