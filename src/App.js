import React from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//<Route path="/Login" component={Dashboard_NavbarPage} exact />
import SigninPage from './pages/signin';

import LoginPage from './pages/Login';

 
//import Dashboard_NavbarPage from './pages/Dashboard';
import Home from './pages';

//import Footer from './components/Footer';
//import Sidebar from './components/Sidebar';
function App() {
	

  return (
    <Router>
    <Switch>
     <Route path="/" component= {Home} exact />
    <Route path="/signin" component={SigninPage} exact />
    <Route path="/Login" component={LoginPage} exact />    

  
      
    </Switch>
    
   
    </Router>
  
  );
}

export default App;
