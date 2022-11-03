import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext, useShoppingCartContext } from '@/context'
import { Loader, NotFound, CheckCartProduct } from '@/components'
import { Box, Button, Rating, Typography } from '@/lib/material-ui'
import { CartActionTypes } from '@/types'

const RatingStyled = styled.div`
  display: flex;
  margin: 5px 0;
`
const TitleProduct = styled.span`
  font-size: 24px;
  font-weight: 400;
  word-break: break-word;
  line-height: 32px;
`
const ImageProduct = styled.img`
  max-width: 400px;
`
const BuyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 200px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.56);
  padding: 15px 10px;
  border-radius: 7px;
`

export const SingleProductPage: React.FC = () => {
  const { id } = useParams()
  const { loading, products } = useProductsContext()
  const { dispatch, state } = useShoppingCartContext()

  const [isInShoppingCart, setIsInShoppingCart] = useState(false)

  useEffect(() => {
    const productIndex = state.productsCart.findIndex(
      (item) => item.id === Number(id)
    )
    if (productIndex > -1) setIsInShoppingCart(true)
    else setIsInShoppingCart(false)
  }, [id, state.productsCart])

  if (loading || !id) return <Loader />

  const product = products.find((product) => product.id === +id)

  if (!product) return <NotFound />

  return (
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
          <CheckCartProduct
            onClick={() => {
              dispatch({ payload: Number(id), type: CartActionTypes.ADD })
            }}
            disabled={isInShoppingCart}
          >
            {/* <Button
              variant="outlined"
              size="small"
              onClick={() => {
                dispatch({ payload: Number(id), type: CartActionTypes.ADD })
              }}
            > </Button>*/}
            Ajouter au panier
          </CheckCartProduct>

          <Button variant="contained" size="small">
            Acheter maintenant
          </Button>
        </Box>
      </BuyBox>
    </Box>
  )
}
