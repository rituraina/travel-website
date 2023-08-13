import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Consulting from './components/pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact components={Home} />
        <Route path='/services' components={Services} />
        <Route path='/products' components={Products} />
        <Route path='/contact-us' components={ContactUs} />
        <Route path='/sign-up' components={SignUp} />
        <Route path='/consulting' components={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;