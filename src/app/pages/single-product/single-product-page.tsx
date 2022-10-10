import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Rating, Typography } from '@mui/material'
import {
  CartActionTypes,
  useShoppingCartContext,
  useProductsContext
} from '../../core/contexts'
import { Loader, NotFound, CheckCartProduct } from '../../core/components'
import {
  BuyBox,
  ImageProduct,
  RatingStyled,
  TitleProduct
} from './components/product-styled-component'

export const SingleProductPage: FC = () => {
  let { id } = useParams()
  const { loading, products } = useProductsContext()
  const { dispatch } = useShoppingCartContext()

  if (!id || isNaN(+id)) return <NotFound />

  const product = products?.[+id]

  return loading ? (
    <Loader />
  ) : !product ? (
    <NotFound />
  ) : (
    <Box sx={{ padding: '100px 20px', display: 'flex', gap: '20px' }}>
      <Box>
        <ImageProduct src={product.image} alt={product.title} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TitleProduct>{product.title}</TitleProduct>
        <RatingStyled>
          <Rating
            name="read-only"
            value={product.rating.rate}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography sx={{ paddingLeft: 0.5, textAlign: 'center' }}>
            {product.rating.count} evaluation
          </Typography>
        </RatingStyled>
        <p>{product.description}</p>
      </Box>
      <BuyBox>
        <span>{product.price} €</span>
        <span style={{ fontSize: '12px' }}>
          Livraison GRATUITE sous 1 à 3 semaines
        </span>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            margin: '15px 0'
          }}
        >
          <CheckCartProduct productId={Number(id)}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                dispatch({ payload: Number(id), type: CartActionTypes.ADD })
              }}
            >
              Ajouter au panier
            </Button>
          </CheckCartProduct>

          <Button variant="contained" size="small">
            Acheter maintenant
          </Button>
        </Box>
      </BuyBox>
    </Box>
  )
}
