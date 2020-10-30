import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import TopPart from './components/Home/TopPart/TopPart';
import Contact from './components/Contact/Contact';
import About from './components/About/About/About';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopPart></TopPart>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/resume">
            <Resume/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
