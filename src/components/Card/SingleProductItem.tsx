import React from 'react'
import { Box, Rating, Typography } from '@/lib/material-ui'
import { Product } from '@/types'
import { toConvertPrice, toUpperCaseFirstLetter } from '@/utils'
import { AddCartProduct } from './AddCartProduct'

type SingleProductItemProps = Product

export const SingleProductItem: React.FC<SingleProductItemProps> = ({
  image,
  title,
  id,
  rating,
  description,
  price
}) => {
  return (
    <Box sx={{ display: { sx: 'block', md: 'flex' }, width: '100%' }}>
      <Box sx={{ flex: '1', marginBottom: '20px' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            maxWidth: '550px',
            width: '100%',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: { sx: '100%', md: '400px' },
          marginLeft: { sx: 0, md: '30px' }
        }}
      >
        <Box>
          <Typography
            component="h3"
            sx={{
              fontSize: '1.5rem'
            }}
          >
            {toUpperCaseFirstLetter(title)}
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
              {rating.count} évaluations
            </Typography>
          </Box>
          <Typography component="p" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <Box sx={{ margin: '30px 0' }}>
          <Typography color="primary" sx={{ fontWeight: 700 }} component="h4">
            {toConvertPrice(price)}
          </Typography>
        </Box>
        <Box>
          <AddCartProduct id={id} title={title} />
        </Box>
      </Box>
    </Box>
  )
}
