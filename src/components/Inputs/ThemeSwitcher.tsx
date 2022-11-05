import React from 'react'
import { useColorModeContext } from '@/context'
import { ThemeTypes } from '@/types'
import { MaterialUISwitch } from '@/lib/material-ui'

export const ThemeSwitcher: React.FC = () => {
  const { mode, toggleColorMode } = useColorModeContext()
  return (
    <MaterialUISwitch
      checked={mode === ThemeTypes.DARK}
      onChange={() => {
        toggleColorMode()
      }}
      sx={{ m: 1 }}
    />
  )
}
