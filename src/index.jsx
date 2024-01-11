import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

//ReactDOM.render(<App />, document.getElementById('app'))
const root = document.getElementById('root');
const rootElement = React.createRoot(root);
rootElement.render(<App />);
