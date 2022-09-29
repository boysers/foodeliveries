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
export type TypeUseMode = 'light' | 'dark'

// Default theme
const defaultTheme: TypeUseMode = 'light'

export const ColorModeContext = createContext<DefaultValueColorModeContext>({
  toggleColorMode: () => {},
  mode: defaultTheme
})

export const ColorModeProvider: FC<PropsColorModeProvider> = ({ children }) => {
  const [mode, setMode] = useState<TypeUseMode>(defaultTheme)

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
    const reverseThemed = defaultTheme === 'light' ? 'dark' : 'light'

    if (localStorage.getItem('theme') === reverseThemed) {
      localStorage.setItem('theme', reverseThemed)
      setMode(reverseThemed)
      console.log(localStorage.getItem('theme'))
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
