// React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'

//
import { store } from './redux/store'
import { theme } from './Theme/themes'
import { Home, Dashboard, SignIn, SignOut, SignUp, DataTable } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path='/' element={<Home title = {'Car Creator'}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signout' element={<SignOut/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
