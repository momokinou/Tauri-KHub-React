import { createContext, useState } from 'react';

export const NavbarIsOpened = createContext({
    opened: true,
    setOpened: (opened: any) => { }
});