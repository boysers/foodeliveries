import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Product } from '@/types'
import { Card, CardContent, Typography, Tooltip, Box } from '@/lib/material-ui'
import { toUpperCaseFirstLetter, toStringSlice, toConvertPrice } from '@/utils'
import { AddCartProduct } from './Inputs'

type ProductCardProps = Product

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 12px !important;
`

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  category,
  price,
  id
}) => {
  const navigate = useNavigate()

  const onHandleClickNavigate = () => {
    navigate(`/products/${id}`)
  }

  const newTitle = toUpperCaseFirstLetter(title)

  return (
    <Card className="grid-item" variant="outlined" component={CardStyled}>
      <Box
        component="img"
        onClick={onHandleClickNavigate}
        src={image}
        alt={title}
        sx={{
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
        <Tooltip title={newTitle}>
          <Typography
            component="h5"
            variant="h6"
            onClick={onHandleClickNavigate}
            sx={{ ':hover': { color: 'info.main', cursor: 'pointer' } }}
          >
            {toStringSlice(newTitle, 24)}
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
          variant="h5"
          color="info.main"
          sx={{ textAlign: 'center', margin: '6px 0' }}
        >
          {toConvertPrice(price)}
        </Typography>
        <AddCartProduct id={id} title={title} />
      </CardContent>
    </Card>
  )
}
