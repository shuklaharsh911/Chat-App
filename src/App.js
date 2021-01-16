import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import LandPage from './components/LandingPage/LandPage';
import ChatRoom from './ChatRoom';
const App = () => (
<Router>
  <Route path="/" exact component={LandPage}/>
  <Route path="/chat" component={ChatRoom}/>
</Router>
);
export default App;
