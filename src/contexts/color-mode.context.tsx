import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

type DefaultValueColorModeContext = {
  toggleColorMode: () => void
  mode: TypeUseMode
}
type PropsColorModeProvider = PropsWithChildren
type TypeUseMode = 'light' | 'dark'

export const ColorModeContext = createContext<DefaultValueColorModeContext>({
  toggleColorMode: () => {},
  mode: 'dark'
})

export const ColorModeProvider: FC<PropsColorModeProvider> = ({ children }) => {
  const [mode, setMode] = useState<TypeUseMode>('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      mode
    }),
    [mode]
  )

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'light')
      setMode('light')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
