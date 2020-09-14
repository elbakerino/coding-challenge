import { ProductFilterOptions } from '../components/ProductFilter'

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

export const loadProducts = (filter: Partial<ProductFilterOptions>) => ({
    type: LOAD_PRODUCTS,
    filter: filter
})

const product_list = (state = {}, action: any) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                loading: 'start'
            }
        default:
            return state
    }
}

export default product_list
