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
                products: action.products,
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
                activeProduct: action.product,
            }
        default:
            return state
    }
}

export default product_list
