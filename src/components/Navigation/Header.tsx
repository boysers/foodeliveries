import React, {
  FC,
  useState,
  MouseEvent,
  useCallback,
  PropsWithChildren,
  ChangeEvent
} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Container,
  Menu,
  Badge
} from '@mui/material'
import { SxProps, Theme, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useResearchContext, useShoppingCartContext } from '../../contexts'
import { ThemeSwitcher } from '../Inputs/ThemeSwitcher'
import { CartTemporaryDrawer } from './CartTemporaryDrawer'
import { SearchBar } from '../Inputs/SearchBar'

type PropsTitleLink = PropsWithChildren<{
  to: string
  sx?: SxProps<Theme> | undefined
}>

const StyledCart = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

const TitleLink: FC<PropsTitleLink> = ({ to, sx, children }) => {
  return (
    <Typography
      component={Link}
      to={to}
      variant="h5"
      noWrap
      sx={{
        flexGrow: 1,
        textDecoration: 'none',
        color: 'inherit',
        letterSpacing: '0.25rem',
        ...sx
      }}
    >
      {children}
    </Typography>
  )
}

const ShoppingCart: FC = () => {
  const context = useShoppingCartContext()
  return (
    <IconButton>
      <Badge badgeContent={context.state.quantityInCart} color="error" max={99}>
        <ShoppingBagOutlinedIcon
          sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, color: '#ffffff' }}
        />
      </Badge>
    </IconButton>
  )
}

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const { state, dispatch } = useResearchContext()

  const title = 'Shopping'

  const onHandleChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch.setSearch(e.target.value.toLowerCase()),
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
