import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Language/i18next/i18next'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    <ChakraProvider>
          <ColorModeScript initialColorMode='light'></ColorModeScript>
          <App />
    </ChakraProvider>

);
