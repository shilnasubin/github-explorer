import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResult from './pages/SearchResult';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SearchBar />
        <SearchResult />
      </div>
    </Router>
  )
}

export default App;