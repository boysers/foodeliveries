import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import { useProductsContext, useShoppingCartContext } from '../core/contexts'

export const CartPage: FC = () => {
  const { state } = useShoppingCartContext()
  const { products } = useProductsContext()

  if (!products) return null

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', m: 4 }}>
        Cart Page
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {/* {JSON.stringify(state.productIds)} */}
        {state.productIds.map(({ id }) => (
          <p key={id}>{products[id].title}</p>
        ))}
      </Typography>
    </>
  )
}
