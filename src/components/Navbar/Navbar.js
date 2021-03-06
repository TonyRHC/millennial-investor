import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { useLocation } from 'react-router-dom'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    backgroundColor: '#469a76',
  }
}));

const ColorTabs = withStyles({
  indicator: {
    backgroundColor: '#ffffff',
  },
})(Tabs);

export default function Navbar() {
  const location = useLocation().pathname;
  let currentLocation = null;
  switch(location) {
    case "/Stocks":
      currentLocation = 1;
      console.log(location);
      break;
    case "/Futures":
      currentLocation = 2;
      break;
    default:
      currentLocation = 0;
  }

  const classes = useStyles();
  const [value, setValue] = useState(currentLocation);
  const [page, setPage] = useState(null)

  const handleChange = (event, newValue) => {
    let redirect = null;
    switch(newValue) {
      case 0:
        redirect = <Redirect to='/'/>
        break;
      case 1:
        redirect = <Redirect to='/Stocks'/>
        break;
      case 2:
        redirect = <Redirect to='/Futures'/>
        break;
      default:
    }

    setPage(redirect);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {page}
      <AppBar position="static">
        <ColorTabs
          variant="fullWidth"
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs example" 
          className={classes.tab}
        >
          <Tab label="Headliners" />
          <Tab label="Stocks" />
          <Tab label="Futures" />
        </ColorTabs>
      </AppBar>
    </div>
  );
}