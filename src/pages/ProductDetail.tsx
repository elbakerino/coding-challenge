import React from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export const ProductDetail = () => {
    const {product} = useParams()

    return <Grid container>
        <Grid item xs>
            <Typography variant="body2" component={'p'}>
                Detail {product}
            </Typography>
        </Grid>
    </Grid>
}
