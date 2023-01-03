import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import { Card } from './card/card';

function App () {
    return (
        <ChakraProvider>
            <Card />
        </ChakraProvider>
    );
}

export default App;
