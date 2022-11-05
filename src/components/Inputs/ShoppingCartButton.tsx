import React from 'react'
import { IconButton, Badge, ShoppingBagOutlinedIcon } from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'

export const ShoppingCartButton: React.FC = () => {
  const { state } = useShoppingCartContext()
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
