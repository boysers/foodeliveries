import React, { FC } from 'react'
import { Badge, IconButton } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useShoppingCartContext } from '../../contexts/shopping-cart/shopping-cart.context'

export const ShoppingCart: FC = () => {
  const context = useShoppingCartContext()
  return (
    <IconButton>
      <Badge
        badgeContent={context.state.quantityInCart}
        color="error"
        max={99}
      >
        <ShoppingBagOutlinedIcon
          sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, color: '#ffffff' }}
        />
      </Badge>
    </IconButton>
  )
}
