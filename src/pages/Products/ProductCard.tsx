import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { VariantType, useSnackbar } from 'notistack'
import { Card, CardContent, Typography, Tooltip } from '@/lib/material-ui'
import { useColorModeContext, useShoppingCartContext } from '@/context'
import { CheckCartProduct } from '@/components'
import { CartActionTypes, Product, ThemeTypes } from '@/types'
import { MAX_QUANTITY_CART } from '@/data/configCart.json'
import { toUpperCaseFirstLetter, toStringSlice } from '@/utils'

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
const PriceStyled = styled.h5`
  color: ${(props: { theme: ThemeTypes }) =>
    props.theme === ThemeTypes.DARK ? '#29b6f6' : '#0288d1'};
`

export const ProductCard: React.FC<PropsProductCard> = ({ product }) => {
  const { image, title, category, price, id } = product

  const { mode: theme } = useColorModeContext()
  const [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const { dispatch, state } = useShoppingCartContext()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const onHandleClickNavigate = () => navigate(`/products/${id}`)

  const onHandleClickPopupAddProduct = (
    title: string,
    variant: VariantType = 'success'
  ) => {
    if (variant === 'success') {
      enqueueSnackbar(`This food add in cart : ${title}`, { variant })
    } else if (variant === 'error') {
      enqueueSnackbar(`Shopping Cart is full`, { variant })
    }
  }

  const onClickAddProductCart = () => {
    dispatch({ payload: id, type: CartActionTypes.ADD })
    if (state.quantityInCart === MAX_QUANTITY_CART) {
      onHandleClickPopupAddProduct(title, 'error')
    } else {
      onHandleClickPopupAddProduct(title)
    }
  }

  useEffect(() => {
    const productIndex = state.productsCart.findIndex((item) => item.id === id)
    if (productIndex > -1) setIsInShoppingCart(true)
    else setIsInShoppingCart(false)
  }, [id, state.productsCart])

  return (
    <Card
      className="grid-item"
      variant="outlined"
      sx={{ borderRadius: '12px' }}
    >
      <CardStyled>
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: 270,
            width: '100%',
            height: 270,
            display: 'block',
            cursor: 'pointer'
          }}
        />
        <CardContent
          sx={{
            padding: '0 12px!important',
            margin: '12px 0',
            textAlign: 'center'
          }}
        >
          <Tooltip title={title}>
            <Typography
              component="h5"
              variant="h6"
              onClick={onHandleClickNavigate}
            >
              <TitleStyled theme={theme}>
                {toStringSlice(title, 24)}
              </TitleStyled>
            </Typography>
          </Tooltip>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: '0.9rem' }}
          >
            {toUpperCaseFirstLetter(category)}
          </Typography>
          <Typography
            component={PriceStyled}
            variant="h5"
            sx={{ textAlign: 'center', margin: '6px 0' }}
          >
            {price.toFixed(2).replace('.', ',')} €
          </Typography>

          <CheckCartProduct
            onClick={onClickAddProductCart}
            disabled={isInShoppingCart}
          >
            Ajouter au panier
          </CheckCartProduct>
        </CardContent>
      </CardStyled>
    </Card>
  )
}
