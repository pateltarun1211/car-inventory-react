import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home, Dashboard, SignIn, SignOut, SignUp } from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home title = {'Car Creator'}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signout' element={<SignOut/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
