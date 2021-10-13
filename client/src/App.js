import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from "@mui/material"
import Posts from './components/posts/Posts';
import Form from './components/form/Form';

const App = () => {
    const {REACT_APP_ICON_IMAGE}=process.env;

    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Title of the App</Typography>
                <img src={REACT_APP_ICON_IMAGE} alt="someImage" height="60" width="60" />
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
