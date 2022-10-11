import React, { FC } from 'react'
import styled from 'styled-components'
import { Box, Button, Divider, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  CartActionTypes,
  useProductsContext,
  useShoppingCartContext,
  ProductId as ProductCart
} from '../../../contexts'

type PropsCartProductItems = {
  productCart: ProductCart
}

const StyledImg = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '150px',
  maxHeight: '150px'
})

export const CartProductItem: FC<PropsCartProductItems> = ({ productCart }) => {
  const { loading, products } = useProductsContext()
  const { dispatch } = useShoppingCartContext()
  if (loading || !products) return null
  const product = products.find(({ id }) => id === productCart.id)
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
