import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import { Switch, Route, Redirect} from 'react-router';
import Products from './Products';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';


const App = () => {
  return (
  <>
  <Navbar/>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/products" component={Products}/>
  <Route exact path="/contact" component={Contact}/>
  <Route exact path="/about" component={About}/>
  <Redirect to="/" />
  </Switch>
  <Footer/>
  </>
    
  );
}

export default App;
