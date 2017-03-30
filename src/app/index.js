import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import AboutMe from './components/aboutMe/AboutMe';
import Introduction from './components/introduction/Introduction';
import Skills from './components/skills/Skills';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';


ReactDOM.render(<Home />, document.getElementById('react-root'));