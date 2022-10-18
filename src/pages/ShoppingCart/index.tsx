import React, { useEffect, useState } from 'react'
import { Box, Button, Divider } from '@mui/material'
import { useProductsContext, useShoppingCartContext } from '@/context'
import { Loader } from '@/components'
import { CartProductItem } from './CartProductItem'

export const ShoppingCartPage: React.FC = () => {
  const { state } = useShoppingCartContext()
  const [totalPrice, setTotalPrice] = useState(0)
  const { loading, products } = useProductsContext()

  useEffect(() => {
    if (loading || !products) return
    const productsCart = state.productsCart
    let totalPrice = 0
    for (let i = 0; i < productsCart.length; i++) {
      const elementId = productsCart[i].id
      const quantity = productsCart[i].quantity
      const productIndex = products.findIndex(({ id }) => id === elementId)
      if (productIndex === undefined || productIndex < 0) continue
      totalPrice += quantity * products[productIndex].price
    }
    setTotalPrice(totalPrice)
  }, [loading, products, state.productsCart])

  return loading ? (
    <Loader />
  ) : (
    <>
      <Box>
        <Box
          sx={{
            border: 'solid 1px black',
            borderRadius: '7px',
            top: '150px',
            minWidth: '200px',
            position: 'sticky',
            float: 'right',
            height: '100%',
            padding: '10px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <span>${totalPrice.toFixed(2)}</span>
            <Button variant="contained">Proceed to checkout</Button>
          </Box>
        </Box>
        <Box sx={{ marginRight: '270px', minHeight: '300px' }}>
          <Box
            sx={{
              display: 'flex',
              padding: '0 5px',
              justifyContent: 'space-between',
              alignItems: 'end'
            }}
          >
            <h1>Shopping Cart</h1>
            <span>Price</span>
          </Box>
          <Divider />
          {state.productsCart.length ? (
            state.productsCart.map((productCart) => (
              <CartProductItem key={productCart.id} productCart={productCart} />
            ))
          ) : (
            <p>Panier vide</p>
          )}
        </Box>
      </Box>
    </>
  )
}
