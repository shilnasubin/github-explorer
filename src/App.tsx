import React, { useState, useEffect } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

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