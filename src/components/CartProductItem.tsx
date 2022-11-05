import React, { MouseEvent, KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Paper, Typography, styledMui } from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'
import { CartActionTypes, Product } from '@/types'

type CartProductItemProps = Partial<Product> &
  Pick<Product, 'id'> & {
    quantity: number
    onToggleDrawer: (event: KeyboardEvent | MouseEvent) => void
  }

export const CartProductItem: React.FC<CartProductItemProps> = ({
  id,
  image,
  title,
  quantity,
  onToggleDrawer,
  price
}) => {
  const { dispatch } = useShoppingCartContext()

  const ImgStyled = styledMui('img')({
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
          <ImgStyled alt={title} sx={{ width: '100px' }} src={image} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: title ? 'currentcolor' : '#fd2121' }}
              >
                {title ? title : 'unavailable product'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity : {quantity}
              </Typography>
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
              <Typography variant="subtitle1" component="div">
                Price : ${price}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
