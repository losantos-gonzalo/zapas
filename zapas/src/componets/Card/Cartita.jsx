import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Cartita({ style }) {


    const productos = [
        {
            nombre: "Nike Air Max 270",
            precio: 150,
            descripcion: "Zapatillas deportivas con cámara de aire visible para una comodidad máxima."
        },
        {
            nombre: "Adidas Ultraboost 21",
            precio: 180,
            descripcion: "Zapatillas de running con tecnología Boost para un retorno de energía sin igual."
        }
    ];

    const { nombre, precio, descripcion } = productos[0];

    return (

        <Flex
            ml={'auto'}
            mr={'auto'}
            mt={'2rem'}
            justify={'center'}
            align={'center'}
            style={style}
            p={5}
            boxShadow="lg"
            borderRadius="md"
            bg="white"
            margin={"0, 5rem"}
        >
            <Box textAlign="center">

                <Heading as="h4" size="md" mb={2}>{nombre}</Heading>
                <Text mb={2}>{descripcion}</Text>
                <Text fontWeight="bold" mb={4}>${precio}</Text>
                <Button colorScheme="teal">Agregar al Carrito</Button>

            </Box>
        </Flex>
    );
}

export default Cartita;


