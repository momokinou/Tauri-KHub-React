import { Navbar, Text } from "@mantine/core";
import { useContext, useState } from "react";

function CustomNavbar() {

    return (
        <>
        <Navbar.Section>
            <Text>Navbar</Text>
        </Navbar.Section>
        <Navbar.Section grow mt="lg">
                <Text>Navbar 1</Text>
                <Text>Navbar 2</Text>
                <Text>Navbar 3</Text>
        </Navbar.Section>
        <Navbar.Section>
            <Text>Footer?</Text>
        </Navbar.Section>
            </>
    );

}

export default CustomNavbar;