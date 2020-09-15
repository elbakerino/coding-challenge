import React from 'react'
import Link from '@material-ui/core/Link'
import { Link as RouterDomLink } from 'react-router-dom'

export const RouterLink = (props: React.PropsWithChildren<any>) => {
    // @ts-ignore
    return <Link component={RouterDomLink} {...props}/>
}
