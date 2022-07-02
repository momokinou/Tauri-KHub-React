import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ColorScheme, ColorSchemeProvider, MantineProvider, useMantineTheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import Home from './Components/Home';
import toggleColorScheme from "./Components/Header"

function App() {

  const theme = useMantineTheme();

  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    getInitialValueInEffect: true,
  });

  return (
    <ColorSchemeProvider colorScheme={theme.colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Home />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
