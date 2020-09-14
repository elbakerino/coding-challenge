import React from 'react'
import { useProducts } from './Product'
import { Box } from '@material-ui/core'
import Loading from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export const ProductDetails = ({product}: { product: number }) => {
    const {loadProduct, loadingActive, activeProduct} = useProducts()

    React.useEffect(() => {
        loadProduct(product)
    }, [product, loadProduct])

    return <Box>
        {loadingActive !== true ? <Box mt={4} mb={4}><Loading/></Box> : null}
        {loadingActive === true && activeProduct ? <>
            <Typography component={'h1'} variant={'h1'}>{activeProduct.name}</Typography>
            <Box>
                {activeProduct.description}
            </Box>
            <Box style={{textAlign: 'center'}} mt={2} mb={2}>
                <img src={activeProduct.api_featured_image} style={{maxWidth: 450}} alt={activeProduct.name}/>
            </Box>
            <Box style={{textAlign: 'center'}} mt={2} mb={2}>
                <Typography gutterBottom variant="h6" component="p">
                    <Link href={activeProduct.website_link}>Homepage</Link>{' · '}
                    <Typography gutterBottom variant="inherit" color={'secondary'} component="span">
                        {activeProduct.price}{activeProduct.currency}
                    </Typography>
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                    <Typography gutterBottom variant="inherit" color={'secondary'} component="span">
                        Brand
                    </Typography>{' · '}
                    <Typography gutterBottom variant="inherit" color={'secondary'} component="span">
                        {activeProduct.brand}
                    </Typography>
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                    <Typography gutterBottom variant="inherit" color={'secondary'} component="span">
                        Category
                    </Typography>{' · '}
                    <Typography gutterBottom variant="inherit" color={'secondary'} component="span">
                        {activeProduct.category}
                    </Typography>
                </Typography>
            </Box>
        </> : null}
    </Box>
}
