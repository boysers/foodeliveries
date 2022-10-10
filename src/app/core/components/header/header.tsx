import React, { FC, useState, MouseEvent, useCallback } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Container,
  Menu
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useResearchContext } from '../../contexts'
import { FuncHandleChange } from '../../types'
import { ThemeSwitcher } from '../theme-switcher/theme-switcher'
import { ShoppingCart } from '../icon-shopping-cart/icon-shopping-cart'
import { CartTemporaryDrawer } from '../cart-temporary-drawer/cart-temporary-drawer'
import { SearchBar } from '../search-bar/search-bar'
import { TitleLink } from './title-link'

const StyledCart = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const { state, dispatch } = useResearchContext()

  const title = 'Shopping'

  const onHandleChangeSearch: FuncHandleChange = useCallback(
    (e) => dispatch.setSearch(e.target.value.toLowerCase()),
    [dispatch]
  )

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
              <SearchIcon />
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
              <SearchBar
                value={state.search}
                onChange={onHandleChangeSearch}
                id="search"
                label="Search"
              />
            </Menu>
          </Box>

          <TitleLink to="/" sx={{ display: { xs: 'flex', md: 'none' } }}>
            {title}
          </TitleLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <SearchBar
              value={state.search}
              onChange={onHandleChangeSearch}
              id="search"
              label="Search"
            />
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
