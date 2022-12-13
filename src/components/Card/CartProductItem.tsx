import React, { MouseEvent, KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  Paper,
  Typography,
  styledMui,
  IconButton,
  RemoveIcon,
  AddIcon
} from '@/lib/material-ui'
import { useShoppingCartContext } from '@/contexts'
import { Product } from '@/types'
import foodList from '@/data/foodList.json'
import { toConvertPrice, toUpperCaseFirstLetter } from '@/utils'

type CartProductItemProps = Partial<Product> &
  Pick<Product, 'id'> & {
    quantity: number
    onToggleDrawer: (event: KeyboardEvent | MouseEvent) => void
  }

const ImgStyled = styledMui('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
})

export const CartProductItem: React.FC<CartProductItemProps> = ({
  id,
  quantity,
  onToggleDrawer
}) => {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCartContext()

  const product = foodList.find((item) => item.id === id)

  if (!product) {
    removeFromCart(id)
    return null
  }

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
          <ImgStyled
            alt={product.title}
            sx={{ width: '100px' }}
            src={product.image}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: product.title ? 'currentcolor' : '#fd2121' }}
              >
                {toUpperCaseFirstLetter(product.title)}
              </Typography>
            </Grid>
            <Grid
              item
              container
              sx={{ alignItems: 'center', paddingTop: '0 !important' }}
            >
              <Typography
                sx={{ fontSize: '0.8rem', paddingRight: '8px' }}
                color="text.secondary"
              >
                Quantity :
              </Typography>
              <IconButton
                aria-label="add"
                color="primary"
                onClick={() => decreaseCartQuantity(id)}
              >
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ m: '0 8px' }}>{quantity}</Typography>
              <IconButton
                aria-label="add"
                color="primary"
                onClick={() => increaseCartQuantity(id)}
              >
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item container>
              <Grid item>
                <Button onClick={() => removeFromCart(id)}>
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
                  disabled={!(product.title && product.price && product.image)}
                >
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Page produit
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {product.price && (
              <Typography variant="subtitle1" component="div">
                Price : {toConvertPrice(product.price)}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
