import React from 'react';
import ReactDOM from 'react-dom';
import DarkTheme from './Components/DarkTheme';
import Hamburger from './Components/Hamburger/index';
import HeroBannerProfile from './Components/HeroBannerProfile';
import './style.css';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import languageReducer from './Store/languageReducer';
import { useSelector } from 'react-redux'
import {translation} from "./I18n/i18n";

const store = createStore(
  combineReducers({
  languageReducer,
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
const AppWrapper = () => {
  return (
      <Provider store={store}>
          <App/>
      </Provider>
    )
  }

const App = () => {
  const lang = useSelector(state => state.languageReducer.language)
  return (
    <>
      < Hamburger />
      < DarkTheme />
      <h1 className="topCenter">{translation(lang, 'header1')}</h1>
      <p className="topCenter">{translation(lang, 'header2')}</p>
      < HeroBannerProfile />
    </>
  )
}

ReactDOM.render(
  <AppWrapper />
  , document.getElementById('root'))
