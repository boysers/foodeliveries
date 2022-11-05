import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Container, Typography, Box } from '@/lib/material-ui'
import { CartTemporaryDrawer } from './CartTemporaryDrawer'
import { ThemeSwitcher, ShoppingCartButton } from './Inputs'

export const Header: React.FC = () => {
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
            <Typography
              component={Link}
              to="/"
              variant="h5"
              noWrap
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                letterSpacing: '0.25rem'
              }}
            >
              Shopping
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeSwitcher />
            <CartTemporaryDrawer>
              <ShoppingCartButton />
            </CartTemporaryDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
