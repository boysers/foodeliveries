import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import defaultTheme from './defaultTheme'
import { ThemeTypes } from './ThemeType.enum'

type DefaultValueColorModeContext = {
  toggleColorMode: () => void
  mode: ThemeTypes
}
type PropsColorModeProvider = PropsWithChildren

const getInitValueState = () => {
  const theme = localStorage.getItem('theme')
  if (theme)
    return theme === ThemeTypes.DARK ? ThemeTypes.DARK : ThemeTypes.LIGHT
  else return defaultTheme
}

export const ColorModeContext = createContext<DefaultValueColorModeContext>({
  toggleColorMode: () => undefined,
  mode: defaultTheme
})

export const ColorModeProvider: FC<PropsColorModeProvider> = ({ children }) => {
  const [mode, setMode] = useState<ThemeTypes>(getInitValueState)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) =>
          prev === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT
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
