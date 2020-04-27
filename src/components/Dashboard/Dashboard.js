import React, { useState, useEffect } from 'react';
import Futures from '../Futures/Futures';
import Stocks from '../Stocks/Stocks';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const Dashboard = () => {
    const [spyFutures, setSpyFutures] = useState({
        value: 'Loading'
    })

    useEffect(() => {
        // Axios call to fetch futures data
    })

    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Futures />
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