import React from 'react'
import { Box, Typography } from '@/lib/material-ui'
import { SingleProductLoaderData } from '@/types'
import { StyledGridItems, ProductItem, SingleProductItem } from '@/components'
import { useLoaderData } from '@/hooks'

export const SingleProduct: React.FC = () => {
  const { product, similarCategoryProducts } =
    useLoaderData<SingleProductLoaderData>()

  return (
    <Box sx={{ padding: '30px 0' }}>
      <SingleProductItem {...product} />
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
              <ProductItem {...item} key={item.id} />
            ))}
          </StyledGridItems>
        </Box>
      )}
    </Box>
  )
}
