import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ghData from './modules/Imports';

console.log(ghData);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
