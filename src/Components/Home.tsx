import { AppShell, Footer, Header, Navbar, Text, useMantineTheme } from '@mantine/core';
import { createContext, useContext, useState } from 'react';
import { NavbarIsOpened } from '../Contexts/NavbarContext';
import CustomButton, { TwitterButton } from './Button';
import CustomHeader from './Header';
import { WebsiteInput } from './Inputs';
import CustomNavbar from './Navbar';
import CustomTable from './Table';

function Home() {

    const theme = useMantineTheme();

    const [opened, setOpened] = useState(false);


    return (
        <NavbarIsOpened.Provider value={{ opened, setOpened }}>
        <AppShell
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            padding="md"
            navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened}  width={{ sm: 200, lg: 300 }} ><CustomNavbar /></Navbar>}
            header={<Header height={60} p="md">{<CustomHeader />}</Header>}
            footer={<Footer height={60} p="md">Application footer</Footer>}
            style={theme}
        >
        {
            <><WebsiteInput /><TwitterButton /></>
        }
        </AppShell>
        </NavbarIsOpened.Provider>
    );
}

export default Home;