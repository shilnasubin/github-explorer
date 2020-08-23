import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResult from './pages/SearchResult';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SearchBar />
        <Switch>
          <Route path="/result" exact component={SearchResult}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;