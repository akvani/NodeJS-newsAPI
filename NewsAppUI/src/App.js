import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';
import Login from './components/login/Login';
import NotFound from './components/NotFound';
import ReadLaterDB from './components/dashboard/ReadLaterDB';
import Register from './components/register/Register'
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import PrivateRoute from './PrivateRoute'


class App extends React.Component{
  render(){
  return (
    <div>
      <Router>
    <Header></Header>
<Switch>    
  <Route exact path="/" component={Home}/>
  <PrivateRoute exact path="/ReadNow" component={ReadLaterDB}/>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/register" component={Register}/>  
  <PrivateRoute   path="/dashboard" component={Dashboard}/>
  <Route component={NotFound}/>
</Switch>
    <Footer></Footer> 
    </Router>
    </div>
  )
  }
}
export default App;
