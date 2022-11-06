import React, { memo } from 'react'
import { Box, Button, CloseIcon, Drawer, Typography } from '@/lib/material-ui'
import { useShoppingCartContext, useColorModeContext } from '@/context'
import { ThemeTypes } from '@/types'
import { CartProductItem } from './CartProductItem'
import listFood from '@/data/foodList.json'
import { ViewportHeight } from '@/layouts'

type CartDrawerProps = {
  isOpen: boolean
  onToggleDrawer: (
    event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void
}

const MemoizedCartProductItem = memo(CartProductItem)

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onToggleDrawer
}) => {
  const { cartItems, cartQuantity } = useShoppingCartContext()
  const { mode } = useColorModeContext()
  const checked = mode === ThemeTypes.DARK

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={onToggleDrawer}>
        <Box
          sx={{
            maxWidth: '500px',
            width: { xs: '100vw', md: '100%' },
            height: '100vh'
          }}
        >
          <Box
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              height: '64px',
              width: '100%',
              backgroundColor: !checked ? 'white' : '#1f2429',
              borderBottom: !checked ? '2px solid gray' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px'
            }}
          >
            <CloseIcon
              sx={{ ':hover': { cursor: 'pointer' } }}
              onClick={onToggleDrawer}
            />
            <Typography component="h4">Panier ({cartQuantity})</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                color="info.main"
                variant="body1"
                sx={{ fontSize: '1.2rem', paddingRight: '16px' }}
              >
                Total:{' '}
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = listFood.find(
                      (food) => food.id === cartItem.id
                    )
                    return total + (item?.price || 0) * cartItem.quantity
                  }, 0)
                  .toFixed(2)
                  .replace('.', ',')}{' '}
                €
              </Typography>
              <Button variant="contained" color="info">
                Buy
              </Button>
            </Box>
          </Box>
          <Box>
            {cartItems.length ? (
              <Box sx={{ padding: '1px 0' }}>
                {cartItems.map((item) => (
                  <MemoizedCartProductItem
                    key={item.id}
                    {...item}
                    onToggleDrawer={onToggleDrawer}
                  />
                ))}
              </Box>
            ) : (
              <ViewportHeight>
                <Typography sx={{ fontSize: '2rem' }} variant="body1">
                  Panier vide 😢
                </Typography>
              </ViewportHeight>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
