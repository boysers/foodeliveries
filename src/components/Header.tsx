import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Container, Box } from '@/lib/material-ui'
import { ThemeSwitcher, ShoppingCartButton } from './Inputs'
import { Link } from './Link'

const StyledLinkWrapper = styled.div`
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`

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
            height: '64px'
          }}
        >
          <Link
            to="/"
            variant="h5"
            sx={{
              letterSpacing: '0.25rem',
              userSelect: 'none'
            }}
          >
            Foodelivery
          </Link>
          <Box component={StyledLinkWrapper}>
            <Link to="/" sx={{ display: { xs: 'none', md: 'inline' } }}>
              Home
            </Link>
            <Link to="products" sx={{ margin: { xs: '10px', md: '50px' } }}>
              Produits
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeSwitcher />
            <ShoppingCartButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
