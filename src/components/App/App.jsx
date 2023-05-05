import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feedback/Feelings';
import Understanding from '../Feedback/Understanding';
import Support from '../Feedback/Support';
import Comments from '../Feedback/Comments';
import Review from '../Feedback/Review';
import Feedbackpage from '../Feedback/FeedbackPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path = '/'>
          <Feelings/>
        </Route>
        <Route exact path = '/Understanding'>
          <Understanding/>
        </Route>
        {/* <Route>
          <Support/>
        </Route> */}
        {/* <Route>
          <Comments/>
        </Route> */}
        {/* <Route>
          <Review/>
        </Route>        */}
        {/* <Route>
          <Feedbackpage/>
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
