import React from 'react'
import Select from '@material-ui/core/Select'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { useUID } from 'react-uid'
import { filterByBrand, filterByType } from '../reducers/product_filter'

export interface ProductFilterOptions {
    brand: string
    product_type: string
}

export interface ProductFilterProps extends ProductFilterOptions {
    filterByBrand: Function
    filterByType: Function
}

export const ProductFilterComponent = ({
                                           brand, product_type,
                                           filterByBrand, filterByType,
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
                <MenuItem value="">
                    <em>-</em>
                </MenuItem>
                {[
                    'almay', 'alva', 'anna sui', 'annabelle', 'benefit', 'boosh', 'burt\'s bees', 'butter london', 'c\'est moi', 'cargo cosmetics', 'china glaze', 'clinique', 'coastal classic creation', 'colourpop', 'covergirl', 'dalish', 'deciem', 'dior', 'dr. hauschka', 'e.l.f.', 'essie', 'fenty', 'glossier', 'green people', 'iman', 'l\'oreal', 'lotus cosmetics usa', 'maia\'s mineral galaxy', 'marcelle', 'marienatie', 'maybelline', 'milani', 'mineral fusion', 'misa', 'mistura',
                    'moov', 'nudus', 'nyx', 'orly', 'pacifica', 'penny lane organics', 'physicians formula', 'piggy paint', 'pure anada', 'rejuva minerals', 'revlon', 'sally b\'s skin yummies', 'salon perfect', 'sante', 'sinful colours', 'smashbox', 'stila', 'suncoat', 'w3llpeople', 'wet n wild', 'zorah', 'zorah biocosmetiques'
                ].map((name) => (
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
                {['blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation', 'lip_liner', 'lipstick', 'mascara', 'nail_polish'].map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
}

const mapStateToProps = (
    {product_filter}: { product_filter: ProductFilterProps }
) => ({...product_filter})

export const ProductFilter = connect(
    mapStateToProps,
    {filterByBrand, filterByType}
)(ProductFilterComponent)
