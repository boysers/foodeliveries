import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useShoppingCartContext } from '@/context'
import {
  AddIcon,
  Box,
  Button,
  Divider,
  IconButton,
  RemoveIcon
} from '@/lib/material-ui'
import { CartActionTypes, ProductCart } from '@/types'
import foodList from '@/data/foodList.json'

type PropsCartProductItem = {
  productCart: ProductCart
}

const StyledImg = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '150px',
  maxHeight: '150px'
})

const CartProductItem: React.FC<PropsCartProductItem> = ({ productCart }) => {
  const { dispatch } = useShoppingCartContext()
  const product = foodList.find(({ id }) => id === productCart.id)
  if (!product) return null

  const handleInc = () => {
    dispatch({ payload: productCart.id, type: CartActionTypes.INCREMENT })
  }
  const handleDec = () => {
    dispatch({ payload: productCart.id, type: CartActionTypes.DECREMENT })
  }

  const handleDelete = () => {
    dispatch({ payload: productCart.id, type: CartActionTypes.DELETE })
  }

  return (
    <>
      <Box sx={{ padding: '5px', display: 'flex', gap: '30px' }}>
        <Box sx={{ minWidth: '150px' }}>
          <StyledImg src={product.image} alt={product.title} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            flex: '1'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '100px'
            }}
          >
            <span style={{ wordBreak: 'break-word' }}>{product.title}</span>
            <span>${product.price}</span>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="add" color="primary" onClick={handleDec}>
              <RemoveIcon />
            </IconButton>
            qte: {productCart.quantity}
            <IconButton aria-label="add" color="primary" onClick={handleInc}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box>
            <Button
              color="error"
              variant="contained"
              size="small"
              onClick={handleDelete}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  )
}

export const ShoppingCart: React.FC = () => {
  const { state } = useShoppingCartContext()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const productsCart = state.productsCart
    let totalPrice = 0
    for (let i = 0; i < productsCart.length; i++) {
      const elementId = productsCart[i].id
      const quantity = productsCart[i].quantity
      const productIndex = foodList.findIndex(({ id }) => id === elementId)
      if (productIndex === undefined || productIndex < 0) continue
      totalPrice += quantity * foodList[productIndex].price
    }
    setTotalPrice(totalPrice)
  }, [state.productsCart])

  return (
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
  )
}
