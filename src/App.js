import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Futures from './components/Futures/Futures';
import Stocks from './components/Stocks/Stocks';
import Headliners from './components/Headliners/Headliners';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route, HashRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    marginTop: '40px'
  }
}));

const App = () => {
  const classes = useStyles();
  const [futures, setFutures] = useState(null);
  const loading = false;

  useEffect(() => {
      fetchFutures();
  }, [loading])

  const fetchFutures = () => {
      axios.get(process.env.REACT_APP_API_URL + 'futures/').then( (response) => {
          setFutures(response.data)
      });
  }

  return (
    <HashRouter className={classes.root}>
      <Navbar/>
      <Container className={classes.content}>
        <Route exact path='/' render={ () => <Headliners /> } />
        <Route path='/Stocks' render={ () => <Stocks/> } />
        <Route path='/Futures' render={ () => <Futures futures={futures}/> } />
      </Container>
    </HashRouter>
  );
}

export default App;
