export interface ProductFilterOptions {
    brand: string
    search: string
    product_type: string
    price_greater_than?: number
    price_less_than?: number
    rating_greater_than?: number
    rating_less_than?: number
}

export const FILTER_BRAND = 'FILTER_BRAND'
export const FILTER_SEARCH = 'FILTER_SEARCH'
export const FILTER_PRICE_MIN = 'FILTER_PRICE_MIN'
export const FILTER_PRICE_MAX = 'FILTER_PRICE_MAX'
export const FILTER_RATING_MIN = 'FILTER_RATING_MIN'
export const FILTER_RATING_MAX = 'FILTER_RATING_MAX'
export const FILTER_TYPE = 'FILTER_TYPE'

export const filterByBrand = (brand: string) => ({
    type: FILTER_BRAND,
    value: brand
})
export const filterByType = (type: string) => ({
    type: FILTER_TYPE,
    value: type
})
export const filterByPriceMin = (min?: number) => ({
    type: FILTER_PRICE_MIN,
    min,
})
export const filterByPriceMax = (max?: number) => ({
    type: FILTER_PRICE_MAX,
    max,
})
export const filterByRatingMin = (min?: number) => ({
    type: FILTER_RATING_MIN,
    min,
})
export const filterByRatingMax = (max?: number) => ({
    type: FILTER_RATING_MAX,
    max,
})
export const filterBySearch = (search: string) => ({
    type: FILTER_SEARCH,
    value: search
})

const product_filter = (
    state: ProductFilterOptions = {
        product_type: '',
        brand: 'dior',
        price_greater_than: undefined,
        price_less_than: undefined,
        rating_greater_than: undefined,
        rating_less_than: undefined,
        search: '',
    },
    action: { type: string, value: any, min?: number, max?: number }
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
        case FILTER_SEARCH:
            return {
                ...state,
                search: action.value
            }
        case FILTER_RATING_MIN:
            return {
                ...state,
                rating_greater_than: action.min ? action.min : undefined,
            }
        case FILTER_RATING_MAX:
            return {
                ...state,
                rating_less_than: action.max ? action.max : undefined
            }
        case FILTER_PRICE_MIN:
            return {
                ...state,
                price_greater_than: action.min ? action.min : undefined
            }
        case FILTER_PRICE_MAX:
            return {
                ...state,
                price_less_than: action.max ? action.max : undefined
            }
        default:
            return state
    }
}

export default product_filter
