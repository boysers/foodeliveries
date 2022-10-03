import React, { FC, useCallback, useContext, useMemo } from 'react'
import { FuncHandleChange } from '../../types'
import { ThemeSwitcher } from '../theme-switcher/theme-switcher.component'
import { ColorModeContext } from '../../contexts'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, MenuItem } from '@mui/material'

type PropsHeader = { pages: string[] }

export const Header: FC<PropsHeader> = ({ pages }) => {
  const colorMode = useContext(ColorModeContext)

  const onHandleChange: FuncHandleChange = useCallback(
    () => colorMode.toggleColorMode(),
    [colorMode]
  )

  const value = useMemo(
    () => ({ checked: colorMode.mode === 'dark', onHandleChange }),
    [colorMode.mode, onHandleChange]
  )

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h5"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            letterSpacing: '0.25rem'
          }}
        >
          SHOP
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <MenuItem key={page} component={Link} to={page}>
              <Typography textAlign="center">
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Typography>
            </MenuItem>
          ))}
        </Box>

        <ThemeSwitcher value={value} />
      </Toolbar>
    </AppBar>
  )
}
