import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App'
import { Provider, createClient } from 'wagmi'

const client = createClient()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider client={client}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
