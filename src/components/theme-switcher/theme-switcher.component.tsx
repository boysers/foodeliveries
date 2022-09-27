import React, { FC } from 'react'
import { Switch } from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { HandleChange } from '../../types/handle-change.type'

type PropsThemeSwitcher = {
  value: { onHandleChange: HandleChange; checked: boolean }
}

export const ThemeSwitcher: FC<PropsThemeSwitcher> = ({ value }) => {
  const { onHandleChange, checked } = value

  const label = `Dark Theme ${!checked ? '🌞' : '🌚'}`

  const ControlSwitch = (
    <Switch
      onChange={onHandleChange}
      checked={checked}
      id="switch-mui"
      color="primary"
    />
  )

  return (
    <FormGroup>
      <FormControlLabel control={ControlSwitch} label={label} />
    </FormGroup>
  )
}
