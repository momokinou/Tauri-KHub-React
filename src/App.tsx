import { useContext, useState } from 'react';
import './App.css'
import { invoke } from '@tauri-apps/api';
import { ActionIcon, AppShell, Aside, Burger, Footer, Group, Header, MantineProvider, MediaQuery, Navbar, ScrollArea, Text } from '@mantine/core';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { ColorScheme, ColorSchemeProvider, createStyles, useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { MemoryRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import { useHotkeys, useLocalStorage, useLocalStorageValue } from '@mantine/hooks';
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
  );
}

export default App
