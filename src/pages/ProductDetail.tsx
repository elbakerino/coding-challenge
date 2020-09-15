import React from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ProductDetails } from '../components/ProductDetails'

export const ProductDetail = () => {
    const {product} = useParams()

    return <Grid container direction={'column'}>
        <Grid item xs>
            <Typography variant="body2" component={'p'}>
                Detail {product}
            </Typography>
        </Grid>
        <Grid item xs>
            <ProductDetails product={product}/>
        </Grid>
    </Grid>
}
