import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Navigator'
import DisplayGrid from './DisplayGrid'
import Contact from './Contact'
import About from './About'
import Footer from'./Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <header >
          <Nav></Nav>
        </header>
        <body>
          <Switch>
            <Route exact path= "/" render={(routerProps) => <DisplayGrid {...routerProps} />}/>
          </Switch>
          <Switch>
            <Route exact path= "/contact" render={(routerProps) => <Contact {...routerProps}/>}/>
          </Switch>
          <Switch>
            <Route exact path= "/about" render={(routerProps) => <About {...routerProps}/>}/>
          </Switch>
        </body>
        <footer>
          <Footer></Footer>

        </footer>
      </div>
    </Router>
  );
}

export default App;
