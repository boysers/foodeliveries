import React, { FC } from 'react'
import { Switch, FormGroup, FormControlLabel } from '@lib/mui'

type PropsThemeSwitcher = { checked: boolean; onChange: () => void }

export const ThemeSwitcher: FC<PropsThemeSwitcher> = ({
  checked,
  onChange
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            onChange={onChange}
            checked={checked}
            id="switch-mui"
            color="primary"
          />
        }
        label={!checked ? '🌞' : '🌚'}
      />
    </FormGroup>
  )
}
