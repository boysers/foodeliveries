import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Badge,
  Typography,
  ShoppingBagOutlinedIcon,
  SxPropsWithTheme,
  Box
} from '@/lib/material-ui'
import { useColorModeContext, useShoppingCartContext } from '@/context'
import { ThemeSwitcher } from './Inputs'
import { CartTemporaryDrawer } from './CartTemporaryDrawer'
import { ThemeTypes } from '@/types'

type PropsTitleLink = PropsWithChildren<{
  to: string
  sx?: SxPropsWithTheme
}>

export const Header: React.FC = () => {
  const { mode, toggleColorMode } = useColorModeContext()
  const { state } = useShoppingCartContext()

  const TitleLink: React.FC<PropsTitleLink> = ({ to, sx, children }) => {
    return (
      <Typography
        component={Link}
        to={to}
        variant="h5"
        noWrap
        sx={{
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

  const ShoppingCart: React.FC = () => {
    return (
      <IconButton sx={{ ':hover': 'pointer' }}>
        <Badge badgeContent={state.quantityInCart} color="error" max={99}>
          <ShoppingBagOutlinedIcon
            sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, color: '#ffffff' }}
          />
        </Badge>
      </IconButton>
    )
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '64px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: { xs: 'center', md: 'start' }
            }}
          >
            <TitleLink to="/">Shopping</TitleLink>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeSwitcher
              checked={mode === ThemeTypes.DARK}
              onChange={toggleColorMode}
            />
            <CartTemporaryDrawer>
              <ShoppingCart />
            </CartTemporaryDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
