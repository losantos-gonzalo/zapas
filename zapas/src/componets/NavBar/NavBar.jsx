import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import { Box, Flex, border } from '@chakra-ui/react'

const NavBar = ({ clase, style }) => {

    return (
        <Flex
            border={'2px solid black'}
            justify={'space-between'}
            className={clase}
            style={style}
        >
            <a href="#">Addidas</a>

            <CardWidget
                clase={'carrito'}
                style={{ width: '3rem', margin: '1rem', }}
            />
        </Flex>
    )
}

export default NavBar
