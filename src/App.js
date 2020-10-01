import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about-me" component={About}/>
                <Route exact paht="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
