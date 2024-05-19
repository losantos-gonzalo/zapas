import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const ItemListContainer = ({ title, style }) => {

    return (
        <Box style={style}>
            <Heading>{title}</Heading>
        </Box>
    )
}

export default ItemListContainer
