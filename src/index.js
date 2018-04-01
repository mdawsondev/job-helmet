import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import allData from './modules/CollectImports';

console.log(allData);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
