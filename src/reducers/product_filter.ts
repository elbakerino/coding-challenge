import { ProductFilterOptions } from '../components/ProductFilter'

export const FILTER_BRAND = 'FILTER_BRAND'
export const FILTER_TYPE = 'FILTER_TYPE'

export const filterByBrand = (brand: string) => ({
    type: FILTER_BRAND,
    value: brand
})
export const filterByType = (type: string) => ({
    type: FILTER_TYPE,
    value: type
})

const product_filter = (
    state: ProductFilterOptions = {
        product_type: 'blush',
        brand: '',
    },
    action: { type: string, value: any }
) => {
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                brand: action.value
            }
        case FILTER_TYPE:
            return {
                ...state,
                product_type: action.value
            }
        default:
            return state
    }
}

export default product_filter
