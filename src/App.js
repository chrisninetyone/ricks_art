import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} /> */}
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} />
        <Route path="/something" component={Something} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
        <Route component={NoMatch} /> */}
      </Switch>
      {/* <Home/> */}
    </div>
  );
}

export default App;
