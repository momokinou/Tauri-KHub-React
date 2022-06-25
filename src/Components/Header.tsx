import { ActionIcon, AppShell, Burger, ColorScheme, Group, MediaQuery, useMantineTheme, Text } from "@mantine/core";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import { useContext, useState } from "react";
import { MoonStars, Sun } from "tabler-icons-react";
import { NavbarIsOpened } from "../Contexts/NavbarContext";
import { Logo } from "./_logo";

function CustomHeader() {

    const theme = useMantineTheme();

    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
      });

    const color = colorScheme === 'dark';

    const {opened, setOpened} = useContext(NavbarIsOpened);

    const toggleColorScheme = (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  
    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
            <>
            <Group sx={{ height: '100%' }} px={20} position="apart">
            {/* <div style={{ display: 'flex', justifyContent: "space-between"}}> */}
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                    opened={opened}
                    onClick={() => setOpened(!opened)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl" />
            </MediaQuery>
            <Text></Text>
            <ActionIcon
                variant="outline"
                color={color ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme">
                {color ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
            {/* </div> */}
            </Group>
        </>
    );
}

export default CustomHeader;