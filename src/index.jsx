import React from 'react'
import App from './App'
import './styles.css'


//ReactDOM.render(<App />, document.getElementById('app'))

import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
