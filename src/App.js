import React ,{Component }from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SigninPage from './pages/signin';
import Home from './pages';
import Footer from './components/Footer';
//import Sidebar from './components/Sidebar';
function App() {
  return (
    <Router>
    <Switch>
     <Route path="/" component= {Home} exact />
    <Route path="/signin" component={SigninPage} exact />

    </Switch>
    
   
    </Router>
  );
}

export default App;
