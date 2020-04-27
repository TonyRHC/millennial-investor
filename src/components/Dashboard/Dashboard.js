import React from 'react';
import Futures from '../Futures/Futures';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Dashboard = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Futures />
                </Grid>
                <Grid item xs={6}>

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