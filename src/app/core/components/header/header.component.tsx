import React, { FC, useState, MouseEvent } from 'react'
import { ThemeSwitcher } from '../theme-switcher/theme-switcher.component'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  MenuItem,
  IconButton,
  Container,
  Menu
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { TitleLink } from './typographies-custom.component'
import { ShoppingCart } from '../icon-shopping-cart/icon-shopping-cart.component'
import { CartTemporaryDrawer } from '../cart-temporary-drawer/cart-temporary-drawer.component'
import styled from 'styled-components'

type PropsHeader = { pages: string[] }

const StyledCart = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const Header: FC<PropsHeader> = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const title = 'Shopping'

  const onHandleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const onHandleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TitleLink
            to="/"
            sx={{ display: { xs: 'none', md: 'flex' }, textAlign: 'center' }}
          >
            {title}
          </TitleLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={onHandleOpenNavMenu}
              color="inherit"
              aria-controls="menu-appbar"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={onHandleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={Link}
                  to={page}
                  onClick={onHandleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <TitleLink to="/" sx={{ display: { xs: 'flex', md: 'none' } }}>
            {title}
          </TitleLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem key={page} component={Link} to={page}>
                <Typography textAlign="center">
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          <ThemeSwitcher />

          <CartTemporaryDrawer>
            <StyledCart>
              <span>Your Cart </span>
              <ShoppingCart />
            </StyledCart>
          </CartTemporaryDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
