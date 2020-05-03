import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Futures from './components/Futures/Futures';
import Stocks from './components/Stocks/Stocks';
import Headliners from './components/Headliners/Headliners';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, withStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
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
  loading: {
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const ColorCircularProgress = withStyles({
  root: {
    color: '#469a76',
  },
})(CircularProgress);

const App = () => {
  const classes = useStyles();
  const [futures, setFutures] = useState(null)
  const [headliners, setHeadliners] = useState(null)
  const [stocks, setStocks] = useState(null)
  const loading = false;

  useEffect(() => {
      fetchFutures();
      fetchHeadliners();
      fetchStocks();
  }, [loading])

  const fetchFutures = () => {
      axios.get(process.env.REACT_APP_API_URL + 'futures/').then( (response) => {
          setFutures(response.data)
      });
  }

  const fetchHeadliners = () => {
    axios.get(process.env.REACT_APP_API_URL + 'headliners/').then( (response) => {
        setHeadliners(response.data);
    });
  }

  const fetchStocks = () => {
    axios.get(process.env.REACT_APP_API_URL + 'stocks/').then( (response) => {
      setStocks(response.data)
    })
  }

  const handleHeadlinersSubmit = (keyword) => {
    axios.post(process.env.REACT_APP_API_URL + 'headliners/', {
      'keyword' : keyword
    })
    .then((response) => {
      setHeadliners(response.data);
    })
  }

  const handleStocksAddSubmit = (ticker) => {
    axios.post(process.env.REACT_APP_API_URL + 'stocks/', {
      'ticker': ticker
    })
    .then((response) => {
        setStocks(response.data)
    })
  }

  const handleStocksDeleteSubmit = (pk) => {
    axios.delete(process.env.REACT_APP_API_URL + 'stocks/' + pk + '/')
    .then((response) => {
      console.log('Deleted: pk')
      setStocks(response.data);
    })
  }

  return (
    headliners !== null && stocks !== null && futures !== null ?
      <div>
        <ThemeProvider theme={theme}>
          <HashRouter className={classes.root}>
              <Navbar/>
                <Container className={classes.content}>
                  <Route exact path='/' render={ () => <Headliners 
                                                          headliners={headliners} 
                                                          handleHeadlinersSubmit={handleHeadlinersSubmit} 
                                                        /> } />
                  <Route path='/Stocks' render={ () => <Stocks 
                                                          stocks={stocks}  
                                                          handleStocksAddSubmit={handleStocksAddSubmit} 
                                                          handleStocksDeleteSubmit={handleStocksDeleteSubmit}
                                                        /> } />
                  <Route path='/Futures' render={ () => <Futures 
                                                          futures={futures} 
                                                        /> } />
                </Container>
            </HashRouter>
          </ThemeProvider>
      </div>
    : <ColorCircularProgress className={classes.loading} />
  );
}

export default App;
