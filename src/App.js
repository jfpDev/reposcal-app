import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';


import './styles.css';


// Importing the App Components
import Home       from './components/Home';
import Calendar   from './components/Calendar';
import Github     from './components/Github';
import Signup     from './components/Signup';
import Login      from './components/Login';
import Profile    from './components/Profile';

function App() {
  const [username, setUsername] = useState('');


  return (
    <Router>
      <Switch>
        <Route exact path='/'      component = {Home} />
        <Route path='/repos'       component = {(props) => <Github {...props} username={username} />} />
        <Route path='/calendar'    component = {Calendar} />
        <Route path='/login'       component = {(props) => <Login {...props} takeUserUp={user => setUsername(user)} />} />
        <Route path='/signup'      component = {(props) => <Signup {...props} takeUserUp={user => setUsername(user)} />} />
        <Route path='/profile'     component = { () => <Profile username={username} />} />       
      </Switch> 
    </Router>       
  );
}

export default App;
