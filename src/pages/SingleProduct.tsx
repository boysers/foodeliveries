import React from 'react'
import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import { AddCartProduct } from '@/components'
import { Box, Button, Rating, Typography } from '@/lib/material-ui'
import { Product } from '@/types'

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

export const SingleProduct: React.FC = () => {
  const product = useLoaderData() as Product

  if (!product) throw new Error('product not found')

  const { image, title, id, rating, description, price } = product

  return (
    <Box sx={{ padding: '100px 20px', display: 'flex', gap: '20px' }}>
      <Box>
        <img src={image} alt={title} style={{ maxWidth: '400px' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="span"
          sx={{
            fontSize: '24px',
            fontWeight: 400,
            wordBreak: 'break-word',
            lineHeight: '32px'
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', margin: '5px 0' }}>
          <Rating
            name="read-only"
            value={rating.rate}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography sx={{ paddingLeft: 0.5, textAlign: 'center' }}>
            {rating.count} evaluation
          </Typography>
        </Box>
        <p>{description}</p>
      </Box>
      <BuyBox>
        <span>{price} €</span>
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
          <AddCartProduct id={id} title={title} />
          <Button variant="contained" size="small">
            Acheter maintenant
          </Button>
        </Box>
      </BuyBox>
    </Box>
  )
}
