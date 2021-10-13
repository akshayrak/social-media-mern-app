import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from "@mui/material"
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import "./app.css"
import useStyles from './styles';

const App = () => {
    const {REACT_APP_ICON_IMAGE}=process.env;
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className="app">
            <AppBar className={classes.appbar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Title</Typography>
                <img className={classes.image} src={REACT_APP_ICON_IMAGE} alt="someImage" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            
        </Container>
    )
}

export default App
