// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ==========

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
