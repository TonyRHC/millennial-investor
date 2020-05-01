import React, { useState, useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import axios from 'axios';

const useStyles = makeStyles({
    card: {
        minHeight: 120,
        backgroundColor: '#262629',
        position: 'relative',
    },
    typography: {
        color: '#ffffff'
    },
    pubdate: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 10,
    },
    keyword: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 10,
        marginBottom: 10,
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

const Headliners = () => {
    const classes = useStyles();
    const [headliners, setHeadliners] = useState(null)

    const loading = false;

    useEffect(() => {
        fetchHeadliners();
    }, [loading])
  
    const fetchHeadliners = () => {
        axios.get(process.env.REACT_APP_API_URL + 'headliners/').then( (response) => {
            setHeadliners(response.data);
            console.log(response.data);
        });
    }

    let headlinersDisplay = <ColorLinearProgress variant="query"/>
    if (headliners != null) {
        const news = headliners.slice();
        headlinersDisplay =
            <Grid container spacing={3}>
                { news.map( e => e.values.slice(0, 20).map( v => 
                        <Grid item xs={6} key={v.title} >
                            <CardActionArea>
                                <a href={v.link}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography variant="subtitle1" className={classes.typography}>
                                            {v.title}
                                            </Typography>
                                            <div className={classes.pubdate}>
                                                <Typography variant="body2" className={classes.typography}>
                                                    {v.pubdate}
                                                </Typography>
                                            </div>
                                            <div className={classes.keyword}>
                                                <Typography variant="button" className={classes.typography}>
                                                    {e.keyword}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            </CardActionArea>
                        </Grid>
                        )
                    )
                }
            </Grid>
    }

    return(
        <div>
            <Typography variant="h2" gutterBottom className={classes.typography}>
                Headliners
            </Typography>
            {headlinersDisplay}
        </div>
    )
}

export default Headliners;