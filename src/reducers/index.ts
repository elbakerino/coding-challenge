import { combineReducers } from 'redux'
import product_list from './product_list'
import product_filter from './product_filter'

export default combineReducers({
    product_list: product_list,
    product_filter: product_filter,
})
