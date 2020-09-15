import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    actionLoadedProduct,
    actionLoadedProducts,
    actionLoadProduct,
    actionLoadProducts,
    ProductsState
} from '../reducers/product_list'
import { ProductFilterOptions } from '../reducers/product_filter'

export interface ProductData {
    api_featured_image: string
    brand: string
    category: string
    created_at: string
    currency: string
    description: string
    id: number
    image_link: string
    name: string
    price: string
    price_sign: string
    product_api_url: string
    product_colors: any[]
    product_link: string
    product_type: string
    rating: null | number
    tag_list: string[]
    updated_at: string
    website_link: string
}

const getList = (filter: Partial<ProductFilterOptions>) => {
    let optionsString = ''
    if (filter.brand) {
        optionsString += 'brand=' + filter.brand + '&'
    }
    if (filter.product_type) {
        optionsString += 'product_type=' + filter.product_type + '&'
    }
    if (filter.price_greater_than) {
        optionsString += 'price_greater_than=' + filter.price_greater_than + '&'
    }
    if (filter.price_less_than) {
        optionsString += 'price_less_than=' + filter.price_less_than + '&'
    }
    if (filter.rating_greater_than) {
        optionsString += 'rating_greater_than=' + filter.rating_greater_than + '&'
    }
    if (filter.rating_less_than) {
        optionsString += 'rating_less_than=' + filter.rating_less_than + '&'
    }

    if (optionsString) {
        optionsString = '?' + optionsString
    }

    const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json' + optionsString
    console.log('apiUrl', apiUrl,)
    return fetch(apiUrl).then(res => res.json())
}

const getOne = (id: number) => {
    const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products/' + id + '.json'
    console.log('apiUrl', apiUrl,)
    return fetch(apiUrl).then(res => res.json())
}

export const useProducts = () => {
    // todo: move filtered to redux (filtering for each hook usage)
    const [filtered, setFiltered] = React.useState<ProductData[]>([])
    const {
        loading, products,
        loadingActive, activeProduct,
    } = useSelector(({product_list}: { product_list: ProductsState }) => product_list)
    const product_filter = useSelector(({product_filter}: { product_filter: ProductFilterOptions }) => product_filter)
    const dispatch = useDispatch()

    const loadProducts = React.useCallback((filter: Partial<ProductFilterOptions>) => {
        // todo: add throttling, debouncing, error handling
        dispatch(actionLoadProducts())
        getList(filter)
            .then(products => {
                dispatch(actionLoadedProducts(products))
            })
            .catch(() => console.error('catch api loadProducts'))
    }, [dispatch])

    const loadProduct = React.useCallback((id: number) => {
        // todo: add throttling, debouncing, error handling
        dispatch(actionLoadProduct())
        getOne(id)
            .then(product => {
                dispatch(actionLoadedProduct(product))
            })
            .catch(() => console.error('catch api loadProduct'))
    }, [dispatch])

    const brand = product_filter.brand
    const product_type = product_filter.product_type
    const search = product_filter.search
    const price_greater_than = product_filter.price_greater_than
    const price_less_than = product_filter.price_less_than
    const rating_greater_than = product_filter.rating_greater_than
    const rating_less_than = product_filter.rating_less_than

    React.useEffect(() => {
        loadProducts({
            brand, product_type,
            price_greater_than, price_less_than,
            rating_greater_than, rating_less_than,
        })
    }, [
        brand, product_type, loadProducts,
        price_greater_than, price_less_than,
        rating_greater_than, rating_less_than,
    ])

    React.useEffect(() => {
        if (search) {
            const sLower = search.toLowerCase()
            setFiltered(products.filter(o => o.name.toLowerCase().indexOf(sLower) !== -1))
        }
    }, [search, setFiltered, products])

    return {
        loading, products: search ? filtered : products, loadProducts,
        loadingActive, activeProduct, loadProduct,
    }
}
