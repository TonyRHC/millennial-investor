import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Futures from './components/Futures/Futures';
import Stocks from './components/Stocks/Stocks';
import Headliners from './components/Headliners/Headliners';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route, HashRouter } from "react-router-dom";

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    marginTop: '40px'
  },
}));

const App = () => {
  const classes = useStyles();
  const [futures, setFutures] = useState(null)
  const [headliners, setHeadliners] = useState(null)
  const loading = false;

  useEffect(() => {
      fetchFutures();
      fetchHeadliners();
  }, [loading])

  const fetchFutures = () => {
      axios.get(process.env.REACT_APP_API_URL + 'futures/').then( (response) => {
          setFutures(response.data)
      });
  }

  const fetchHeadliners = () => {
    axios.get(process.env.REACT_APP_API_URL + 'headliners/').then( (response) => {
        setHeadliners(response.data);
        console.log(response.data)
    });
  }

  const handleHeadlinersSubmit = (keyword) => {
    axios.post(process.env.REACT_APP_API_URL + 'headliners/', {
      'keyword' : keyword
    })
    .then((response) => {
      console.log(response);
      setHeadliners(response.data);
    })
  }

  return (
    <div>
      <HashRouter className={classes.root}>
        <Navbar/>
            <Container className={classes.content}>
              <Route exact path='/' render={ () => <Headliners headliners={headliners} handleHeadlinersSubmit={handleHeadlinersSubmit} /> } />
              <Route path='/Stocks' render={ () => <Stocks/> } />
              <Route path='/Futures' render={ () => <Futures futures={futures} /> } />
            </Container>
      </HashRouter>
    </div>
  );
}

export default App;
