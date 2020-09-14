import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterDomLink
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'

import reducers from './reducers'

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

const store = createStore(reducers)

function App() {
    return (
        <Router>
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                <Paper>
                    <RouterLink to={'/'}>Home</RouterLink>

                    <Provider store={store}>

                        <Switch>
                            <Route path="/product/:product">
                                <ProductDetail/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>

                    </Provider>
                </Paper>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        </Router>
    )
}

export default App
