import React, {
  useState,
  MouseEvent,
  KeyboardEvent,
  FC,
  PropsWithChildren,
  useContext
} from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Drawer,
  Grid,
  Paper,
  Typography,
  styled
} from '@mui/material'
import {
  useShoppingCartContext,
  CartActionTypes,
  useProductsContext,
  ColorModeContext,
  ThemeType
} from '../../contexts'

export const CartTemporaryDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { products } = useProductsContext()
  const shoppingCartContext = useShoppingCartContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { mode } = useContext(ColorModeContext)
  const checked = mode === ThemeType.DARK

  if (!products) {
    return null
  }

  const onToggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen((prev) => !prev)
  }

  const StyledImg = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  })

  const calculateTotalPrice = shoppingCartContext.state.productIds.reduce(
    (acc, currentValue) => {
      return products[currentValue.id].price * currentValue.quantity + acc
    },
    0
  )

  const listProduct = shoppingCartContext.state.productIds.map((product) => {
    return (
      <Paper
        key={product.id}
        sx={{
          p: 2,
          margin: '20px',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
        }}
      >
        {products && (
          <Grid container spacing={2}>
            <Grid item>
              <StyledImg
                alt="complex"
                sx={{ width: '100px' }}
                src={products[product.id].image}
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    children={products[product.id].title}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    children={`Quantity : ${product.quantity}`}
                  />
                </Grid>
                <Grid item container>
                  <Grid item>
                    <Button
                      onClick={() =>
                        shoppingCartContext.dispatch({
                          type: CartActionTypes.DELETE,
                          payload: product.id
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
                      to={`/products/${product.id}`}
                    >
                      <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        Page produit
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  component="div"
                  children={`Price : $${products[product.id].price}`}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Paper>
    )
  })

  return (
    <div>
      <span onClick={onToggleDrawer}>{children}</span>
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
              Ouvrir le panier - {calculateTotalPrice}€
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
