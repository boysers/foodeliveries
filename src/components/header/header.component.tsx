import React, { FC, memo, useCallback, useContext, useMemo } from 'react'
import { HandleChange } from '../../types/handle-change.type'
import { ThemeSwitcher } from '../theme-switcher/theme-switcher.component'
import { ColorModeContext } from '../../contexts/color-mode.context'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'

const MemoizedThemeSwitcher = memo(ThemeSwitcher)

export const Header: FC = () => {
  const colorMode = useContext(ColorModeContext)

  const onHandleChange: HandleChange = useCallback(() => {
    colorMode.toggleColorMode()
  }, [colorMode])

  const value = useMemo(() => {
    return { checked: colorMode.mode === 'dark', onHandleChange }
  }, [colorMode.mode, onHandleChange])

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Shop
        </Typography>
        <MemoizedThemeSwitcher value={value} />
      </Toolbar>
    </AppBar>
  )
}
