import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterDomLink
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const RouterLink = (props: React.PropsWithChildren<any>) => {
    // @ts-ignore
    return <Link component={RouterDomLink} {...props}/>
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

function App() {
    return (
        <Router>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <RouterLink to={'/'}>Home</RouterLink>
                <RouterLink to={'about'}>About</RouterLink>
                <Paper>
                    <Switch>
                        <Route path="/about">
                            <Grid container>
                                <Grid item xs>
                                    <Typography variant="body2" component={'p'}>
                                        About
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Route>
                        <Route path="/">
                            <Grid container>
                                <Grid item xs>
                                    <Typography variant="body2" component={'p'}>
                                        Home
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Route>
                    </Switch>
                </Paper>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        </Router>
    )
}

export default App
