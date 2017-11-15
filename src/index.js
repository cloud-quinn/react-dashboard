import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';
import { createStore } from 'redux';
import reducers from './reducers/reducers'

let store = createStore(reducers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
