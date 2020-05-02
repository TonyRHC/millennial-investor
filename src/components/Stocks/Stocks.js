import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        color: '#ffffff',
    },
});

const Stocks = () => {
    const classes = useStyles();

    return(
        <div>
            <Typography variant="h2" gutterBottom className={classes.title}>
                Stocks
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.title}>
                Coming soon...
            </Typography>
        </div>
    )
}

export default Stocks;