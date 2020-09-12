import * as serviceWorker from './serviceWorker';
import appState, {subscribe} from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom"
import store from "./redux/redux-store"
import {Provider} from "react-redux"
import SamuraiJsApp from "./App";

    ReactDOM.render(<SamuraiJsApp/> ,document.getElementById('root'));



serviceWorker.unregister();
