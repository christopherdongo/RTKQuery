import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import {store} from './redux/store';

import {CssBaseline} from '@nextui-org/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <CssBaseline>
      <App />
    </CssBaseline>
    </Provider>
  </React.StrictMode>
)
