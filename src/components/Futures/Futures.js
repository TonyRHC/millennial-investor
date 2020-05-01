import React, { useState, useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress'

import axios from 'axios';

const useStyles = makeStyles({
    card: {
        minHeight: 150,
    },
    title: {
        color: '#ffffff',
    },
    sameRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    changeGain: {
        color: '#469a76',
    },
    changeLoss: {
        color: '#a43e24',
    },
});

const ColorLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: '#ffffff',
    },
    barColorPrimary: {
        backgroundColor: '#469a76',
    },
})(LinearProgress);
  

const Futures = () => {
    const classes = useStyles();
    const [futures, setFutures] = useState(null)
    const loading = false;

    useEffect(() => {
        fetchFutures();
    }, [loading])
  
    const fetchFutures = () => {
        axios.get(process.env.REACT_APP_API_URL + 'futures/').then( (response) => {
            setFutures(response.data)
        });
    }

    let futuresDisplay = <ColorLinearProgress variant="query" />
    if (futures !== null) {
        const topFutures = futures.slice()
        futuresDisplay = 
            <Grid container spacing={3}>
                {topFutures.map( e => 
                    <Grid item xs={3} key={e.symbol} >
                        <Card className={classes.card}>
                            <CardContent>
                                <div className={classes.sameRow}>
                                    <Typography variant="subtitle2">
                                        {e.name} {" "} ({e.symbol})
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h4" >
                                            {parseFloat(e.price.replace(/,/g, '')).toFixed(3)}
                                    </Typography>
                                    <Typography variant="button" className={e.change.charAt(0) === '+' ? classes.changeGain : classes.changeLoss}>
                                            {e.change} ({e.percentChange})
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
    }

    return (
        <div>
            <Typography variant="h2" gutterBottom className={classes.title}>
                Futures
            </Typography>
            {futuresDisplay}
        </div>
    )
}

export default Futures;