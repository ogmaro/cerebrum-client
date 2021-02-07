import React ,{Component,useState }from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SigninPage from './pages/signin';
import LoginPage from './pages/Login';
 //  <Route path="/Login" component={Dashboard_navbarPage} exact />

import Dashboard_navbarPage from './pages/Dashboard';
import Home from './pages';
import Homes from './pages/Homes';
import Footer from './components/Footer';
//import Sidebar from './components/Sidebar';
function App() {
	

  return (
    <Router>
    <Switch>
     <Route path="/" component= {Home} exact />
    <Route path="/signin" component={SigninPage} exact />
    <Route path="/Login" component={LoginPage} exact />
  
        <Route path="/" component={Homes} exact />
    </Switch>
    
   
    </Router>
  
  );
}

export default App;
