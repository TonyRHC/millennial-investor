import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Futures from './components/Futures/Futures';
import Stocks from './components/Stocks/Stocks';
import Headliners from './components/Headliners/Headliners';

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

  return (
    <HashRouter className={classes.root}>
      <Navbar/>
      <Container className={classes.content}>
        <Route exact path='/' render={ () => <Headliners /> } />
        <Route path='/Stocks' render={ () => <Stocks/> } />
        <Route path='/Futures' render={ () => <Futures /> } />
      </Container>
    </HashRouter>
  );
}

export default App;
