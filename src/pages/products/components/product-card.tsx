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
  Tooltip,
  AddShoppingCartOutlinedIcon
} from '@lib/mui'
import { ColorModeContext, useShoppingCartContext } from '@context'
import { CheckCartProduct } from '@components'
import { CartActionTypes, Product, ThemeTypes } from '@types'
import { MAX_QUANTITY_CART } from '@data/configCart'
import { toUpperCaseFirstLetter } from '@utils'

type PropsProductCard = { product: Product }

const TitleStyled = styled.div`
  &:hover {
    cursor: pointer;
    color: ${(props: { theme: ThemeTypes }) =>
      props.theme === ThemeTypes.DARK ? '#29b6f6' : '#0288d1'};
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
const PriceStyled = styled.h5`
  color: ${(props: { theme: ThemeTypes }) =>
    props.theme === ThemeTypes.DARK ? '#29b6f6' : '#0288d1'};
`
const ContainerStyled = styled.div`
  width: 100%;
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
        <ContainerStyled>
          <CardMedia
            component="img"
            src={image}
            alt={title}
            sx={{
              ':hover': { cursor: 'pointer' },
              maxWidth: 270,
              width: '100%',
              height: 270
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
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: '0.9rem' }}
            >
              {toUpperCaseFirstLetter(category)}
            </Typography>
            <RatingStyled>
              <Rating
                name="read-only"
                value={rating.rate}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography sx={{ paddingLeft: 0.5, fontSize: '0.8rem' }}>
                {rating.count} evaluation
              </Typography>
            </RatingStyled>
            <Typography
              component={PriceStyled}
              variant="h5"
              sx={{ textAlign: 'center' }}
            >
              {price.toFixed(2).replace('.', ',')} €
            </Typography>
          </CardContent>
        </ContainerStyled>
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
              Ajouter au panier
            </Button>
          </CheckCartProduct>
        </CardActions>
      </CardStyled>
    </Card>
  )
}
