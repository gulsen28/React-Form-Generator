import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './pages/App'
import 'semantic-ui-css/semantic.min.css'



const router=
<Router>
  <Route path="/" exact component={App}></Route>
</Router>

ReactDOM.render(router,document.getElementById('root'));
reportWebVitals();
