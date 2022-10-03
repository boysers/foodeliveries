import React, { FC } from 'react'
import { FuncHandleChange } from '../../types'
import { Switch, FormGroup, FormControlLabel } from '@mui/material'

type PropsThemeSwitcher = {
  value: { onHandleChange: FuncHandleChange; checked: boolean }
}

export const ThemeSwitcher: FC<PropsThemeSwitcher> = ({ value }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            onChange={value.onHandleChange}
            checked={value.checked}
            id="switch-mui"
            color="primary"
          />
        }
        label={`Dark Theme ${!value.checked ? '🌞' : '🌚'}`}
      />
    </FormGroup>
  )
}
