import { useState, useMemo, createContext, ReactElement } from 'react';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themes[mode]), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;

const themes: { [key: string]: ThemeOptions } = {
  dark: {
    palette: {
      mode: 'dark',
    },
  },
  light: {
    palette: {
      mode: 'light',
    },
  },
};

interface ThemeProviderProps {
  children: ReactElement;
}
