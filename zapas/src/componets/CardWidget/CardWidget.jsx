import { Flex } from '@chakra-ui/react';
import React from 'react'
import { MdLocalGroceryStore } from "react-icons/md";


const CardWidget = ({ clase, style }) => {

    return (
        <Flex className={clase}
            style={style}
        >
            <MdLocalGroceryStore />
        </Flex>
    )
}

export default CardWidget
