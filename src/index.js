import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// UI Library styles x custom styles
import 'normalize.css';
import './styles/main.scss';

// Redux store for state management
import { Provider } from 'react-redux';
import store from './redux/store';

// Service worker for offline shenanigans
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, 
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
