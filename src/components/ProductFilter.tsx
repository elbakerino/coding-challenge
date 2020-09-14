import React from 'react'
import Select from '@material-ui/core/Select'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { useUID } from 'react-uid'
import {
    filterByBrand,
    filterByRatingMin, filterByRatingMax, filterByPriceMin, filterByPriceMax,
    filterBySearch,
    filterByType,
    ProductFilterOptions
} from '../reducers/product_filter'

export interface ProductFilterProps extends ProductFilterOptions {
    filterByBrand: Function
    filterByType: Function
    filterBySearch: Function
    filterByRatingMin: Function
    filterByRatingMax: Function
    filterByPriceMin: Function
    filterByPriceMax: Function
}

const brands = [
    'almay', 'alva', 'anna sui', 'annabelle', 'benefit', 'boosh', 'burt\'s bees', 'butter london', 'c\'est moi', 'cargo cosmetics', 'china glaze', 'clinique', 'coastal classic creation', 'colourpop', 'covergirl', 'dalish', 'deciem', 'dior', 'dr. hauschka', 'e.l.f.', 'essie', 'fenty', 'glossier', 'green people', 'iman', 'l\'oreal', 'lotus cosmetics usa', 'maia\'s mineral galaxy', 'marcelle', 'marienatie', 'maybelline', 'milani', 'mineral fusion', 'misa', 'mistura',
    'moov', 'nudus', 'nyx', 'orly', 'pacifica', 'penny lane organics', 'physicians formula', 'piggy paint', 'pure anada', 'rejuva minerals', 'revlon', 'sally b\'s skin yummies', 'salon perfect', 'sante', 'sinful colours', 'smashbox', 'stila', 'suncoat', 'w3llpeople', 'wet n wild', 'zorah', 'zorah biocosmetiques'
]

const types = ['blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation', 'lip_liner', 'lipstick', 'mascara', 'nail_polish']

export const ProductFilterComponent = ({
                                           brand, product_type, search,
                                           price_less_than, price_greater_than,
                                           rating_less_than, rating_greater_than,
                                           filterByBrand, filterByType, filterBySearch,
                                           filterByRatingMin, filterByRatingMax, filterByPriceMin, filterByPriceMax,
                                       }: ProductFilterProps) => {
    const uid = useUID()
    return <Box>
        <FormControl style={{minWidth: 120, marginRight: 6}}>
            <InputLabel htmlFor={'_' + uid + '_brand'}>Brand</InputLabel>
            <Select
                id={'_' + uid + '_brand'}
                value={brand || ''}
                onChange={e => filterByBrand(e.target.value)}
            >
                {brands.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl style={{minWidth: 120, marginRight: 6}}>
            <InputLabel htmlFor={'_' + uid + '_type'}>Type</InputLabel>
            <Select
                id={'_' + uid + '_type'}
                value={product_type || ''}
                onChange={e => filterByType(e.target.value)}
            >
                <MenuItem value="">
                    <em>-</em>
                </MenuItem>
                {types.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl style={{minWidth: 120, marginRight: 6}}>
            <TextField
                id={'_' + uid + '_search'}
                value={search || ''}
                onChange={e => filterBySearch(e.target.value)}
                label={'Search'}
            />
        </FormControl>
        <FormControl style={{minWidth: 120, marginRight: 6}}>
            <InputLabel shrink htmlFor={'_' + uid + '_price_min'}>Min / Max Price</InputLabel>
            <div style={{display: 'flex', marginTop: 16}}>
                <TextField
                    id={'_' + uid + '_price_min'}
                    value={price_greater_than || ''}
                    onChange={e => filterByPriceMin(parseInt(e.target.value))}
                    style={{width: 50, marginRight: 6}}
                />
                <TextField
                    id={'_' + uid + '_price_max'}
                    value={price_less_than || ''}
                    onChange={e => filterByPriceMax(parseInt(e.target.value))}
                    style={{width: 50}}
                />
            </div>
        </FormControl>
        <FormControl style={{minWidth: 120, marginRight: 6}}>
            <InputLabel shrink htmlFor={'_' + uid + '_rating_min'}>Min / Max Rating</InputLabel>
            <div style={{display: 'flex', marginTop: 16}}>
                <TextField
                    id={'_' + uid + '_rating_min'}
                    value={rating_greater_than || ''}
                    onChange={e => filterByRatingMin(parseInt(e.target.value))}
                    style={{width: 50, marginRight: 6}}
                />
                <TextField
                    id={'_' + uid + '_rating_max'}
                    value={rating_less_than || ''}
                    onChange={e => filterByRatingMax(parseInt(e.target.value))}
                    style={{width: 50}}
                />
            </div>
        </FormControl>
    </Box>
}

const mapStateToProps = (
    {product_filter}: { product_filter: ProductFilterProps }
) => ({...product_filter})

export const ProductFilter = connect(
    mapStateToProps,
    {
        filterByBrand,
        filterByType,
        filterBySearch,
        filterByRatingMin,
        filterByRatingMax,
        filterByPriceMin,
        filterByPriceMax
    }
)(ProductFilterComponent)
