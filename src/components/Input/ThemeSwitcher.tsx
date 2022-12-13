import React from 'react'
import { useColorModeContext } from '@/contexts'
import { ThemeTypes } from '@/types'
import { MaterialUISwitch } from '@/lib/material-ui'

type ThemeSwitcherProps = { isText?: boolean }

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isText }) => {
  const { mode, toggleColorMode } = useColorModeContext()

  const checked = mode === ThemeTypes.DARK

  return (
    <div>
      <MaterialUISwitch
        checked={checked}
        onChange={() => {
          toggleColorMode()
        }}
        sx={{ m: 1 }}
      />
      {isText && <p>{checked ? 'Dark' : 'Light'} Theme</p>}
    </div>
  )
}
