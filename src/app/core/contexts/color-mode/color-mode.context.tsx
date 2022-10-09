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
import defaultTheme from './defaultTheme'
import { ThemeType } from './ThemeType.enum'

type DefaultValueColorModeContext = {
  toggleColorMode: () => void
  mode: ThemeType
}
type PropsColorModeProvider = PropsWithChildren

const getInitValueState = () => {
  const theme = localStorage.getItem('theme')
  if (theme) return theme === ThemeType.DARK ? ThemeType.DARK : ThemeType.LIGHT
  else return defaultTheme
}

export const ColorModeContext = createContext<DefaultValueColorModeContext>({
  toggleColorMode: () => {},
  mode: defaultTheme
})

export const ColorModeProvider: FC<PropsColorModeProvider> = ({ children }) => {
  const [mode, setMode] = useState<ThemeType>(getInitValueState)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) =>
          prev === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT
        ),
      mode
    }),
    [mode]
  )

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])

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
