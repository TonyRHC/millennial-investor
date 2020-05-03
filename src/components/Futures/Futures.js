import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles({
    card: {
        minHeight: 150,
        backgroundColor: '#262629',
    },
    typography: {
        color: '#ffffff',
    },
    sameRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    changeGain: {
        color: '#52ba8d',
    },
    changeLoss: {
        color: '#cc4827',
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
  

const Futures = (props) => {
    const classes = useStyles();

    let futuresDisplay = <ColorLinearProgress variant="query" />
    if (props.futures !== null) {
        const topFutures = props.futures.slice();
        futuresDisplay = 
            <div>
                <Typography variant="h2" gutterBottom className={classes.typography}>
                    Futures
                </Typography>
                <Grid container spacing={4}>
                    {topFutures.map( e => 
                        <Grid item xs={12} sm={6} lg={3} key={e.symbol} >
                            <Card className={classes.card}>
                                <CardContent>
                                    <div className={classes.sameRow}>
                                        <Typography variant="subtitle2" className={classes.typography}>
                                            {e.name} {" "} ({e.symbol})
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="h4" className={classes.typography}>
                                                {parseFloat(e.price.replace(/,/g, '')).toFixed(2)}
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
            </div>
    }

    return (
        <div>
            {futuresDisplay}
        </div>
    )
}

export default Futures;