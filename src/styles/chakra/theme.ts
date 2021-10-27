import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        primary: {
            50: '#e8fce5',
            100: '#c6f0bf',
            200: '#a3e598',
            300: '#7fdb71',
            400: '#5bd049',
            500: '#43b730',
            600: '#328e24',
            700: '#236619',
            800: '#133d0d',
            900: '#001600',
        },
    },
    fonts: {
        heading: 'Inter, system-ui, sans-serif, Arial, Helvetica',
        body: 'Inter, system-ui, sans-serif, Arial, Helvetica',
        mono: 'Menlo, monospace',
    },
});

export default customTheme;
