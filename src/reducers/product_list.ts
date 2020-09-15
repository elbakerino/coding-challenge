import { progress } from '../components/Progress'
import { ProductData } from '../components/Product'

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const LOADED_PRODUCTS = 'LOADED_PRODUCTS'
export const LOAD_PRODUCT = 'LOAD_PRODUCT'
export const LOADED_PRODUCT = 'LOADED_PRODUCT'

export const actionLoadProducts = () => ({
    type: LOAD_PRODUCTS
})

export const actionLoadedProducts = (products: ProductData[]) => ({
    type: LOADED_PRODUCTS,
    products
})

export const actionLoadProduct = () => ({
    type: LOAD_PRODUCT
})

export const actionLoadedProduct = (product: ProductData) => ({
    type: LOADED_PRODUCT,
    product
})

export interface ProductsState {
    loading: progress
    loadingActive: progress
    products: ProductData[]
    activeProduct?: ProductData
}

const parseText = (text: string) => {
    // html parts cleaning, https://stackoverflow.com/a/47963179/2073149
    const parser = new DOMParser()
    return parser.parseFromString(`<!doctype html><body>${text}`, 'text/html').body.textContent || ''
}

export const product_list = (state: ProductsState = {
    loading: false,
    loadingActive: false,
    products: [],
    activeProduct: undefined
}, action: any) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                loading: 'start'
            }
        case LOADED_PRODUCTS:
            return {
                ...state,
                loading: true,
                products: action.products.map((product: ProductData) => {
                    product.name = parseText(product.name)
                    return product
                }),
            }
        case LOAD_PRODUCT:
            return {
                ...state,
                loadingActive: 'start'
            }
        case LOADED_PRODUCT:
            return {
                ...state,
                loadingActive: true,
                activeProduct: (() => {
                    const product = action.product
                    product.name = parseText(product.name)
                    return product
                })(),
            }
        default:
            return state
    }
}

export default product_list
