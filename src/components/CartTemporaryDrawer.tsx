/* eslint-disable react/no-children-prop */
import React, {
  useState,
  MouseEvent,
  KeyboardEvent,
  PropsWithChildren,
  useMemo,
  useCallback,
  memo
} from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Drawer,
  Grid,
  Paper,
  Typography,
  styledMui
} from '@/lib/material-ui'
import {
  useShoppingCartContext,
  useProductsContext,
  useColorModeContext
} from '@/context'
import { ThemeTypes, CartActionTypes, Product } from '@/types'

type PropsCartProductItem = Partial<Product> &
  Pick<Product, 'id'> & {
    quantity: number
    onToggleDrawer: (event: KeyboardEvent | MouseEvent) => void
  }

const CartProductItem: React.FC<PropsCartProductItem> = ({
  id,
  image,
  title,
  quantity,
  onToggleDrawer,
  price
}) => {
  const { dispatch } = useShoppingCartContext()

  const StyledImg = styledMui('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  })

  return (
    <Paper
      sx={{
        p: 2,
        margin: '20px',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <StyledImg alt={title} sx={{ width: '100px' }} src={image} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                variant="subtitle1"
                component="div"
                children={title ? title : 'unavailable product'}
                sx={{ color: title ? 'currentcolor' : '#fd2121' }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                children={`Quantity : ${quantity}`}
              />
            </Grid>
            <Grid item container>
              <Grid item>
                <Button
                  onClick={() =>
                    dispatch({
                      type: CartActionTypes.DELETE,
                      payload: id
                    })
                  }
                >
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Remove
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={onToggleDrawer}
                  color="primary"
                  component={Link}
                  to={`/products/${id}`}
                  disabled={!(title && price && image)}
                >
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Page produit
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {price && (
              <Typography
                variant="subtitle1"
                component="div"
                children={`Price : $${price}`}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

const MemoizedCartProductItem = memo(CartProductItem)

export const CartTemporaryDrawer: React.FC<PropsWithChildren> = ({
  children
}) => {
  const { products } = useProductsContext()
  const shoppingCartContext = useShoppingCartContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { mode } = useColorModeContext()
  const checked = mode === ThemeTypes.DARK

  const onToggleDrawer = useCallback((event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen((prev) => !prev)
  }, [])

  const calculateTotalPrice = useMemo(
    () =>
      shoppingCartContext.state.productsCart.reduce((acc, currentValue) => {
        const product = products.find(
          (itemCart) => itemCart.id === currentValue.id
        )
        return !product ? acc : product.price * currentValue.quantity + acc
      }, 0),
    [products, shoppingCartContext.state.productsCart]
  )

  const listProduct = shoppingCartContext.state.productsCart.map(
    (productCart) => {
      const INDEX_ID = products.findIndex(
        (product) => product.id === productCart.id
      )

      if (INDEX_ID === -1)
        return (
          <MemoizedCartProductItem
            key={productCart.id}
            onToggleDrawer={onToggleDrawer}
            quantity={productCart.quantity}
            id={productCart.id}
          />
        )

      return (
        <MemoizedCartProductItem
          key={products[INDEX_ID].id}
          onToggleDrawer={onToggleDrawer}
          quantity={productCart.quantity}
          {...products[INDEX_ID]}
        />
      )
    }
  )

  return (
    <div>
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
          <Typography
            component="h4"
            children="Panier"
            sx={{ padding: '1rem' }}
          />
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
          {listProduct.length ? listProduct : 'Panier vide'}
        </div>
      </Drawer>
    </div>
  )
}
