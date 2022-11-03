import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useContext
} from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import defaultTheme from '@/data/defaultTheme'
import { ThemeTypes } from '@/types'
import { useLocalStorage } from '@/hooks'

type ValueColorModeContext = {
  toggleColorMode: () => void
  mode: ThemeTypes
}

const ColorModeContext = createContext<ValueColorModeContext>({
  toggleColorMode: () => undefined,
  mode: defaultTheme
})

export const ColorModeProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [theme, setTheme] = useLocalStorage('theme', { mode: defaultTheme })

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setTheme((prevTheme) => ({
          mode:
            prevTheme.mode === ThemeTypes.LIGHT
              ? ThemeTypes.DARK
              : ThemeTypes.LIGHT
        })),
      mode: theme.mode
    }),
    [setTheme, theme.mode]
  )

  const themeMui = useMemo(
    () => createTheme({ palette: { mode: theme.mode } }),
    [theme.mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeMui}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const useColorModeContext = () => {
  const colorModeContext = useContext(ColorModeContext)

  if (!colorModeContext)
    throw new Error('useColorModeContext was used outside of its Provider')

  return colorModeContext
}
