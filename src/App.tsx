import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/About';
import SkillsPage from './Pages/Skills';
import MediaPage from './Pages/SocialMedia';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AboutPage />
        </Route>
        <Route path="/skills">
          <SkillsPage />
        </Route>
        <Route path="/socialmedia">
          <MediaPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
