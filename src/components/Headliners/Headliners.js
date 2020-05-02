import React from 'react';
import HeadlinersModal from '../Modals/HeadlinersModal'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

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
    },
    keyword: {
        float: 'right',
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

const Headliners = (props) => {
    const classes = useStyles();

    let headlinersDisplay = <ColorLinearProgress variant="query" />
    if (props.headliners != null) {
        const news = props.headliners.slice();
        headlinersDisplay =
            <Grid container spacing={3}>
                { news.map( e => e.values.slice(0, 3).map( v => 
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
            <div>
                <Typography variant="h2" gutterBottom className={classes.typography}>
                    Headliners
                </Typography>
                <HeadlinersModal handleSubmit={props.handleHeadlinersSubmit} />
            </div>
            {headlinersDisplay}
        </div>
    )
}

export default Headliners;