import { BsJustify } from 'react-icons/bs'
import './App.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import NavBar from './componets/NavBar/NavBar'
import { Button, Card, ChakraProvider, background, border } from '@chakra-ui/react'
import Cartita from './componets/Card/Cartita'

function App() {

  return (

    <div>
      <ChakraProvider>

        <NavBar
          clase={"navbar"}
          style={{ background: '#ddb' }}
        />

        <ItemListContainer
          style={{ border: '2px solid black', textAlign: 'center', padding: '20px' }}
          title='Tienda'
        />

        <Cartita
          style={{
            border: '2px solid black',
            width: '25rem',
            padding: '1rem'
          }}

        />

      </ChakraProvider>
    </div>
  )
}

export default App
