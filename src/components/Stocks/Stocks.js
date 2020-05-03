import React, { useState, useEffect } from 'react';
import StocksModal from '../Modals/StocksModal'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'

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
    button: {
        float: 'right',
        marginTop: -45,
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
  

const Stocks = (props) => {
    const classes = useStyles();
    const [show, setShow] = useState({});

    useEffect(() => {
        if (props.stocks != null) {
            const newShow = {}
            const stockData = props.stocks.slice();
            stockData.forEach((stock) => {
                newShow[stock.pk] = true;
            })
            setShow(newShow);
        }
    }, [props.stocks])

    const handleDelete = (pk) => {
        const shallowCopy = {...show}
        shallowCopy[pk] = false;
        setShow(shallowCopy)
        props.handleStocksDeleteSubmit(pk);
    }

    let stocksDisplay = <ColorLinearProgress variant="query" />
    if (props.stocks !== null) {
        const stockData = props.stocks.slice();
        stocksDisplay = 
            <div>
                <Typography variant="h2" gutterBottom className={classes.title}>
                    Stocks
                </Typography>
                <StocksModal handleSubmit={props.handleStocksAddSubmit} />
                <Grid container spacing={4}>
                    {stockData.map( e => 
                        show[e.pk] ?
                            <Grid item xs={12} sm={6} lg={3} key={e.pk} >
                                <Card className={classes.card}>
                                    <CardContent>
                                        <div>
                                            <Typography variant="h5">
                                                {e.data.symbol}
                                            </Typography>
                                            <IconButton className={classes.button} onClick={() => handleDelete(e.pk)} >
                                                <DeleteIcon/>
                                            </IconButton>
                                        </div>
                                        <Typography variant="h4" >
                                                {e.data.price}
                                        </Typography>
                                        <Typography variant="button" className={e.data.change.charAt(0) === '+' ? classes.changeGain : classes.changeLoss}>
                                                {e.data.change}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        : null
                    )}
                </Grid>
            </div>
    }

    return(
        <div>
            {stocksDisplay}
        </div>
    )
}

export default Stocks;