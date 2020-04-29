import React, { useState, useEffect } from 'react';
import Futures from '../Futures/Futures';
import Stocks from '../Stocks/Stocks';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const [futures, setFutures] = useState(null)

    useEffect(() => {
        fetchFutures();
    }, [loading])

    const fetchFutures = () => {
        axios.get(process.env.REACT_APP_API_URL + 'futures/').then( (response) => {
            console.log(response);
            setFutures(response.data)
        } )
    }

    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Futures futures={futures} />
                </Grid>
                <Grid item xs={6}>
                    <Stocks/ >
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={3}>
                
                </Grid>
                <Grid item xs={3}>
                
                </Grid>
                <Grid item xs={3}>
                
                </Grid>
                <Grid item xs={3}>
                
                </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Dashboard;