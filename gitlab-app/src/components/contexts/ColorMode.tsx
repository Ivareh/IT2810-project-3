import React from 'react';
import {
    createTheme,
    CssBaseline,
    PaletteMode,
    ThemeProvider,
    useMediaQuery
} from '@mui/material';

export const ColorModeContext = React.createContext(
    {
        toggleColorMode: () => {
        }
    },
);

/**
 * Creates and stores a context that includes both theme and which mode that is
 * to be used in localStorage.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */

//@ts-ignore
export const ColorModeProvider = ({ children }) => {
    const storedMode = localStorage.getItem('colormode');
    const [mode, setMode] = React.useState(
        storedMode === 'null' ? '' : storedMode);

    /**
     * Returns a memoized value. Recomputes it when one of the dependencies
     * has changed.
     */
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    localStorage.setItem('colormode', newMode);
                    return newMode;
                });
            },
        }),
        [],
    );
    const isDarkModePreferred = useMediaQuery('(prefers-color-scheme: dark)' as PaletteMode);
    const theme = React.useMemo(() => createTheme({
        //@ts-ignore
        palette: {
            mode: (mode ? mode : isDarkModePreferred ? 'dark' : 'light') as PaletteMode,
        },
    }), [isDarkModePreferred, mode]);


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
