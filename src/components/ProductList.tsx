import React from 'react'
import Loading from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { ProductData } from './Product'
import { connect } from 'react-redux'
import { progress } from './Progress'
import { ProductFilterOptions } from './ProductFilter'

const getList = (filter: Partial<ProductFilterOptions>) => {
    let optionsString = ''
    if (filter.brand) {
        optionsString += 'brand=' + filter.brand + '&'
    }
    if (filter.product_type) {
        optionsString += 'product_type=' + filter.product_type + '&'
    }

    if (optionsString) {
        optionsString = '?' + optionsString
    }

    const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json' + optionsString
    console.log('apiUrl', apiUrl,)
    return fetch(apiUrl).then(res => res.json())
}

export interface ProductListProps {
    loading: progress
    products: ProductData[]
    product_filter: ProductFilterOptions
}

export const ProductListComponent = (props: ProductListProps) => {
    const [progress, setProgress] = React.useState<progress>(false)
    const [products, setProducts] = React.useState<ProductData[]>([])

    const product_filter = props.product_filter
    const brand = product_filter.brand
    const product_type = product_filter.product_type

    React.useEffect(() => {
        setProgress('start')
        getList({brand, product_type}).then(r => {
            setProducts(r)
            setProgress(true)
        })
    }, [
        brand, product_type,
        setProgress, setProducts
    ])

    return <>
        <Grid container spacing={2}>
            {progress !== true ?
                <Grid
                    item xs={12} style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    <Loading/>
                </Grid> : null}
            {progress === true ?
                <>
                    {products.map((product, i) => <Grid item key={i} md={6}>
                        {product.name}
                    </Grid>)}
                    <Grid item xs={12}>
                        {products.length}x
                    </Grid>
                </>
                : null}
        </Grid>
    </>
}

const mapStateToProps = (
    {
        product_list: {
            loading,
            products,
        },
        product_filter: product_filter,
    }: {
        product_list: { loading: progress, products: ProductData[] },
        product_filter: ProductFilterOptions
    }
) => (
    {
        product_filter,
        loading,
        products,
    }
)

export const ProductList = connect(
    mapStateToProps
)(ProductListComponent)
