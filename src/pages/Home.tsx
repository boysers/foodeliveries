import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Box, Button, Typography } from '@/lib/material-ui'
import { Category, HomeLoaderData } from '@/types'
import { toUpperCaseFirstLetter } from '@/utils'
import { ImageHomeCard, ProductItem } from '@/components'
import { useLoaderData } from '@/hooks'

const GridStyled = styled.div`
  padding-bottom: 16px;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 16px;
`

export const Home: React.FC = () => {
  const { productOne, productTwo, similarCategoryProducts } =
    useLoaderData<HomeLoaderData>()

  const navigate = useNavigate()

  const onHandleClickNavigate = () => {
    navigate(`products`)
  }

  const categories = similarCategoryProducts.reduce<Category[]>(
    (acc, food) =>
      acc.includes(food.category) ? acc : acc.concat(food.category),
    []
  )

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '600px',
          position: 'relative',
          marginBottom: '75px'
        }}
      >
        <ImageHomeCard
          src={productOne.image}
          alt={productOne.title}
          title={productOne.title}
          category={productOne.category}
        />
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.50)',
            height: '100%',
            width: '2px'
          }}
        />
        <ImageHomeCard
          src={productTwo.image}
          alt={productTwo.title}
          title={productTwo.title}
          category={productTwo.category}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            margin: '0 auto',
            width: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              margin: '50px'
            }}
          >
            <Button
              onClick={onHandleClickNavigate}
              variant="contained"
              color="primary"
              size="large"
              data-testid="button"
            >
              Découvrir
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        {categories.map((cate, idx) => (
          <Box
            key={`${idx}-${cate}`}
            sx={{ margin: '50px 0' }}
            data-testid="category"
          >
            <Typography
              component="h2"
              sx={{ fontSize: '1.5rem', margin: '25px 0', paddingLeft: '10px' }}
              data-testid="cate-title"
            >
              {toUpperCaseFirstLetter(cate)}
            </Typography>
            <GridStyled>
              {similarCategoryProducts
                .filter((food) => food.category === cate)
                .slice(0, 4)
                .map((foodFiltered) => (
                  <ProductItem {...foodFiltered} key={foodFiltered.id} />
                ))}
              <Button
                onClick={onHandleClickNavigate}
                variant="outlined"
                color="primary"
                size="large"
              >
                Afficher plus
              </Button>
            </GridStyled>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
