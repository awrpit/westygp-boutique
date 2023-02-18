import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'react-alice-carousel/lib/alice-carousel.css';

import 'react-toastify/dist/ReactToastify.css';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
