import React from 'react'
import Loading from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { ProductData, useProducts } from './Product'
import { progress } from './Progress'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link as RouterDomLink } from 'react-router-dom'
import { RouterLink } from './Link'
import { ProductFilterOptions } from '../reducers/product_filter'

export interface ProductListProps {
    loading: progress
    products: ProductData[]
    product_filter: ProductFilterOptions
}

export const ProductList = () => {
    const {loading, products} = useProducts()

    return <>
        <Grid container spacing={2} style={{paddingLeft: 12, paddingRight: 12}}>
            {loading !== true ?
                <Grid
                    item xs={12} style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    <Loading/>
                </Grid> : null}
            {loading === true ?
                <>
                    {products.map((product, i) => <Grid item key={i} md={6}>
                        <Card>
                            <CardActionArea component={RouterDomLink} to={'/product/' + product.id}>
                                <CardMedia
                                    image={product.api_featured_image}
                                    title={product.name}
                                    style={{minHeight: 250}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}{' · '}
                                        <Typography gutterBottom variant="inherit" color={'secondary'} component="span">
                                            {product.price}{product.currency}
                                        </Typography>
                                    </Typography>
                                    {product.description ?
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {product.description.substr(0, 275)}
                                            {product.description.length > 275 ? '...' : ''}
                                        </Typography> : null}
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <RouterLink to={'/product/' + product.id}>Learn More</RouterLink>
                            </CardActions>
                        </Card>
                    </Grid>)}
                    <Grid item xs={12}>
                        {products.length > 0 ? products.length + ' Products' : 'No Products Found'}
                    </Grid>
                </>
                : null}
        </Grid>
    </>
}
