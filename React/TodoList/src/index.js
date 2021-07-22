import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RegisterApp from './Register/RegisterApp';
import { addReducer } from './Register/PageIn/reducer/reducer';
import thunk from 'redux-thunk'
const store = createStore(
  addReducer,
  applyMiddleware(thunk)
)
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <RegisterApp />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
