import React, { PropsWithChildren, useMemo, memo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Drawer, Typography } from '@/lib/material-ui'
import { useShoppingCartContext, useColorModeContext } from '@/context'
import { ThemeTypes } from '@/types'
import foodList from '@/data/foodList.json'
import { CartProductItem } from './CartProductItem'
import { useToggleDrawer } from '@/hooks/useToggleDrawer'

const MemoizedCartProductItem = memo(CartProductItem)

export const CartDrawer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onToggleDrawer } = useToggleDrawer()
  const shoppingCartContext = useShoppingCartContext()
  const { mode } = useColorModeContext()
  const checked = mode === ThemeTypes.DARK

  const calculateTotalPrice = useMemo(
    () =>
      shoppingCartContext.state.productsCart.reduce((acc, currentValue) => {
        const product = foodList.find(
          (itemCart) => itemCart.id === currentValue.id
        )
        return !product ? acc : product.price * currentValue.quantity + acc
      }, 0),
    [shoppingCartContext.state.productsCart]
  )

  const CartProducts = shoppingCartContext.state.productsCart.map(
    (cartProduct) => {
      const INDEX_ID = foodList.findIndex(
        (product) => product.id === cartProduct.id
      )

      if (INDEX_ID === -1)
        return (
          <MemoizedCartProductItem
            key={cartProduct.id}
            onToggleDrawer={onToggleDrawer}
            quantity={cartProduct.quantity}
            id={cartProduct.id}
          />
        )

      return (
        <MemoizedCartProductItem
          key={foodList[INDEX_ID].id}
          onToggleDrawer={onToggleDrawer}
          quantity={cartProduct.quantity}
          {...foodList[INDEX_ID]}
        />
      )
    }
  )

  return (
    <>
      <span onClick={onToggleDrawer} role="presentation">
        {children}
      </span>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onToggleDrawer}
        sx={{ width: '300px' }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            height: '64px',
            backgroundColor: !checked ? 'white' : '#253F4B',
            borderBottom: !checked ? '2px solid gray' : 'none',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography component="h4" sx={{ padding: '1rem' }}>
            Panier
          </Typography>
          <Button
            color="primary"
            component={Link}
            to={`/cart`}
            onClick={onToggleDrawer}
          >
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Ouvrir le panier - {calculateTotalPrice.toFixed(2)}€
            </Typography>
          </Button>
        </Box>
        <div style={{ margin: '.25rem 1rem' }}>
          {CartProducts.length ? CartProducts : 'Panier vide'}
        </div>
      </Drawer>
    </>
  )
}
