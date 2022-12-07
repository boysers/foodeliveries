import React from 'react'
import { Box, Rating, Typography } from '@/lib/material-ui'
import { AddCartProduct, ProductCard } from '@/components'
import { SingleProductLoaderData } from '@/types'
import { toUpperCaseFirstLetter, toConvertPrice } from '@/utils'
import { StyledGridItems } from '@/layouts'
import { useLoaderData } from '@/hooks'

export const SingleProduct: React.FC = () => {
  const { product, similarCategoryProducts } =
    useLoaderData<SingleProductLoaderData>()

  const { image, title, id, rating, description, price } = product

  return (
    <Box sx={{ padding: '30px 0' }}>
      <Box sx={{ display: { sx: 'block', md: 'flex' }, width: '100%' }}>
        <Box sx={{ flex: '1', marginBottom: '20px' }}>
          <img
            src={image}
            alt={title}
            style={{
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
            <AddCartProduct id={id} title={title} variant="outlined" />
          </Box>
        </Box>
      </Box>
      {similarCategoryProducts.length >= 1 && (
        <Box sx={{ margin: '30px 0', marginTop: '100px' }}>
          <Typography
            component="h3"
            sx={{ fontSize: '1.3rem', margin: '30px 0', paddingLeft: '10px' }}
          >
            Vous aimerez aussi
          </Typography>
          <StyledGridItems>
            {similarCategoryProducts.map((item) => (
              <ProductCard {...item} key={item.id} />
            ))}
          </StyledGridItems>
        </Box>
      )}
    </Box>
  )
}
