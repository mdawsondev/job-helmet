import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './modules/Imports';

console.log(data);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
