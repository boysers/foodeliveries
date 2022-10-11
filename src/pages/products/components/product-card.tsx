import React, { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { VariantType, useSnackbar } from 'notistack'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  CardActions,
  Tooltip
} from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import {
  Product,
  ColorModeContext,
  ThemeType,
  CartActionTypes,
  useShoppingCartContext,
  MAX_QUANTITY_CART
} from '../../../contexts'
import { CheckCartProduct } from '@components'

type PropsProductCard = { product: Product }

const TitleStyled = styled.div`
  &:hover {
    cursor: pointer;
    color: ${(props: { theme: ThemeType }) =>
      props.theme === ThemeType.DARK ? '#29b6f6' : '#0288d1'};
  }
`
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`
const RatingStyled = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: center;
`

export const ProductCard: FC<PropsProductCard> = ({ product }) => {
  const { image, title, category, rating, price, id } = product

  const { mode: theme } = useContext(ColorModeContext)
  const { dispatch, state } = useShoppingCartContext()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const onHandleClickNavigate = () => navigate(`/products/${id}`)

  const onHandleClickAddProduct = (
    title: string,
    variant: VariantType = 'success'
  ) => {
    if (variant === 'success') {
      enqueueSnackbar(`This food add in cart : ${title}`, { variant })
    } else if (variant === 'error') {
      enqueueSnackbar(`Shopping Cart is full`, { variant })
    }
  }

  return (
    <Card className="grid-item" variant="outlined">
      <CardStyled>
        <div>
          <CardMedia
            component="img"
            src={image}
            alt={title}
            sx={{
              ':hover': { cursor: 'pointer' },
              maxWidth: 270,
              maxHeight: 270,
              width: 'auto',
              margin: '0 auto'
            }}
            onClick={onHandleClickNavigate}
          />
          <CardContent
            sx={{ paddingBottom: '0!important', textAlign: 'center' }}
          >
            <Tooltip title={title}>
              <Typography
                component="h5"
                variant="h6"
                onClick={onHandleClickNavigate}
              >
                <TitleStyled theme={theme}>{title}</TitleStyled>
              </Typography>
            </Tooltip>
            <Typography variant="body1" color="text.secondary">
              {category}
            </Typography>
            <RatingStyled>
              <Rating
                name="read-only"
                value={rating.rate}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography sx={{ paddingLeft: 0.5 }}>
                {rating.count} evaluation
              </Typography>
            </RatingStyled>
            <Typography variant="h5" sx={{ textAlign: 'center', marginTop: 2 }}>
              ${price}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <CheckCartProduct productId={id}>
            <Button
              endIcon={<AddShoppingCartOutlinedIcon />}
              onClick={() => {
                dispatch({ payload: id, type: CartActionTypes.ADD })
                if (state.quantityInCart === MAX_QUANTITY_CART) {
                  onHandleClickAddProduct(title, 'error')
                } else {
                  onHandleClickAddProduct(title)
                }
              }}
            >
              Add to Cart
            </Button>
          </CheckCartProduct>
        </CardActions>
      </CardStyled>
    </Card>
  )
}
