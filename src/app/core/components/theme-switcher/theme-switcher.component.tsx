import React, { FC, useContext } from 'react'
import { Switch, FormGroup, FormControlLabel } from '@mui/material'
import { ColorModeContext, ThemeType } from '../../contexts'

export const ThemeSwitcher: FC = () => {
  const { mode , toggleColorMode } = useContext(ColorModeContext)

  const checked = mode === ThemeType.DARK

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            onChange={toggleColorMode}
            checked={checked}
            id="switch-mui"
            color="primary"
          />
        }
        label={`Dark Theme ${!checked ? '🌞' : '🌚'}`}
      />
    </FormGroup>
  )
}
