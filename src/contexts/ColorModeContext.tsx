import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useContext
} from 'react'
import {
  createThemeMui,
  CssBaselineMui,
  ThemeProviderMui
} from '@/lib/material-ui'
import { ThemeTypes } from '@/types'
import { useLocalStorage } from '@/hooks'

type ColorModeContextDefaultValue = {
  toggleColorMode: () => void
  mode: ThemeTypes
}

const ColorModeContext = createContext<ColorModeContextDefaultValue | null>(
  null
)

export const ColorModeProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [theme, setTheme] = useLocalStorage('theme', { mode: ThemeTypes.LIGHT })

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
    () => createThemeMui({ palette: { mode: theme.mode } }),
    [theme.mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProviderMui theme={themeMui}>
        <CssBaselineMui />
        {children}
      </ThemeProviderMui>
    </ColorModeContext.Provider>
  )
}

export const useColorModeContext = () => {
  const colorModeContext = useContext(ColorModeContext)

  if (!colorModeContext)
    throw new Error('useColorModeContext was used outside of its Provider')

  return colorModeContext
}
