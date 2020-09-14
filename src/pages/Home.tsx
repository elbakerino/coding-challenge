import React from 'react'
import Grid from '@material-ui/core/Grid'
import { ProductList } from '../components/ProductList'
import { ProductFilter } from '../components/ProductFilter'

export const Home = () => {
    return <Grid container direction={'column'} spacing={4}>
        <Grid item xs>
            <ProductFilter/>
        </Grid>
        <Grid item xs>
            <ProductList/>
        </Grid>
    </Grid>
}
